import { Directus } from '@directus/sdk';
import { paramCase } from 'change-case'
import { image as downloadImg } from 'image-downloader';
import { existsSync } from 'fs';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { replaceMustacheVars } from '../utils.mjs';

const ENDPOINT = 'https://cms.bemuns.org';
const TEMPLATE_PATH = './template-blog.md';
const OUTPUT_PATH = './.generated';

const sdk = new Directus(ENDPOINT);

(async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));

  const { data: blogs } = await sdk.items('blogs').readByQuery({ fields: '*.*' });

  const destPath = join(__dirname, OUTPUT_PATH);
  const markdownDestPath = join(destPath, './markdown');
  const imageDestPath = join(destPath, './images');

  if (!existsSync(destPath)) {
    await mkdir(destPath);
  }
  if (!existsSync(markdownDestPath)) {
    await mkdir(markdownDestPath);
  }
  if (!existsSync(imageDestPath)) {
    await mkdir(imageDestPath);
  }

  const templatePath = join(__dirname, TEMPLATE_PATH);
  const template = await readFile(templatePath, 'utf-8');

  const generatedMarkdown = await Promise.all(blogs.map(async (blog) => {
    const thumbnail = blog.featured_image ? await downloadImg({
      url: `${sdk.url}/assets/${blog.featured_image.id}`,
      dest: imageDestPath,
    }) : null;
    const date = new Date(blog.date_created);
    const dateFormatted = date.toISOString().split('T')[0];
    const markdown = replaceMustacheVars(template, {
      title: `"${blog.title}"`,
      date: dateFormatted,
      category: `"${blog.category.name}"`,
      content: blog.content,
      author: `"${blog.user_created.first_name.concat(' ', blog.user_created.last_name)}"`,
      image: `"${thumbnail ? `/content/blogs${thumbnail.filename.replace(imageDestPath, '')}` : null}"`,
      tags: blog.tags && JSON.stringify(blog.tags),
    });
    const filename = `${dateFormatted}-${paramCase(blog.title)}.md`;

    await writeFile(join(markdownDestPath, filename), markdown);

    // Find any images in the content
    const blogAssets = [...markdown.matchAll(/!\[.{0,}\]\((.+)\)/g)].map(([, assetUrl]) => assetUrl);
    // Save that assets to folder if any
    await Promise.all(blogAssets.map((el) => downloadImg({ url: el, dest: imageDestPath })));

    return filename;
  }));

  await writeFile(join(destPath, '_meta.json'), JSON.stringify({
    blogs: generatedMarkdown,
    categories: [...new Set(blogs.map((blog) => blog.category.name))],
  }));
  console.log(`Generated ${generatedMarkdown.length} markdown files`);
})()
