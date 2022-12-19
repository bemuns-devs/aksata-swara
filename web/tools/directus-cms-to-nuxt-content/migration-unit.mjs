import { Directus } from '@directus/sdk';
import { paramCase } from 'change-case'
import { image as downloadImg } from 'image-downloader';
import { existsSync } from 'fs';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { replaceMustacheVars } from '../utils.mjs';

const ENDPOINT = 'https://cms.bemuns.org';
const TEMPLATE_PATH = './template-unit.md';
const OUTPUT_PATH = './.generated';

const sdk = new Directus(ENDPOINT);

(async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));

  const { data: units } = await sdk.items('unit_platform').readByQuery({ fields: '*.*' });

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

  const generatedMarkdown = await Promise.all(units.map(async (unit) => {
    const thumbnail = unit.logo ? await downloadImg({
      url: `${sdk.url}/assets/${unit.logo.id}`,
      dest: imageDestPath,
    }) : null;
    const markdown = replaceMustacheVars(template, {
      title: `"${unit.name}"`,
      url: `"${unit.link}"`,
      description: `"${unit.short_description}"`,
      image: `"${thumbnail ? `/content/unit${thumbnail.filename.replace(imageDestPath, '')}` : null}"`,
    });
    const filename = `${paramCase(unit.name).toLocaleLowerCase()}.md`;

    await writeFile(join(markdownDestPath, filename), markdown);

    return filename;
  }));

  console.log(`Generated ${generatedMarkdown.length} markdown files`);
})()
