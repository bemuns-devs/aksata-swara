import { paramCase } from 'change-case';
import { existsSync } from 'fs';
import { mkdir, readFile, writeFile } from 'fs/promises';
import glob from 'glob';
import { image as downloadImg } from 'image-downloader';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { replaceMustacheVars } from '../utils.mjs';

const OUTPUT_PATH = './.generated';
const TEMPLATE_PATH = './template.md';

/**
 * @typedef {Object} Feed
 * @property {string} id
 * @property {string} caption
 * @property {"IMAGE" | "CAROUSEL_ALBUM" | "VIDEO"} media_type
 * @property {string} media_url
 * @property {string} thumbnail_url
 * @property {string} timestamp
 */

(async () => {
  const feeds = await readSources()

  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const templatePath = join(__dirname, TEMPLATE_PATH);
  const template = await readFile(templatePath, 'utf-8');
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

  const generatedMarkdown = await Promise.all(feeds.map(async (feed) => {
    const thumbnail = await downloadImg({
      url: feed.thumbnail_url ?? feed.media_url,
      dest: imageDestPath,
    });
    const date = new Date(feed.timestamp);
    const dateFormatted = date.toISOString().split('T')[0];
    const markdown = replaceMustacheVars(template, {
      title: `"${getHeadline(feed)}"`,
      date: dateFormatted,
      content: feed.caption,
      image: `/content/blogs${thumbnail.filename.replace(imageDestPath, '')}`,
      author: 'Admin',
      tags: '',
      category: 'postingan',
    });

    const filename = `${dateFormatted}-${paramCase(feed.id)}.md`;

    await writeFile(join(markdownDestPath, filename), markdown);

    return destPath;
  }));

  console.log(`Generated ${generatedMarkdown.length} markdown files`);
})()

/** @returns {Feed[]} */
async function readSources() {
  const sourcesRaw = glob.sync('./sources/feeds*.json')
  const sources = await Promise.all(sourcesRaw.map(src => readFile(src, 'utf8')))
  return sources.map(source => JSON.parse(source).data).flat()
}

/**
 * @param {Feed} feed
 * @todo Use ChatGPT to get title
 */
function getHeadline(feed) {
  const [, headline] = /\[(.+)\]/gi.exec(feed.caption) ?? [];

  if (headline) {
    return headline.trim();
  }

  return 'No headline';
}
