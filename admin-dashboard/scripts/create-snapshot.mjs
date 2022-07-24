import { execSync } from 'child_process';
import { copyFileSync, readdirSync } from 'fs';
import { resolve } from 'path';

const dir = resolve(process.cwd(), './snapshots');
const dest = resolve(dir, `${Date.now()}.yaml`);

execSync(`npx directus schema snapshot "${dest}"`);

copyFileSync(dest, resolve(dir, 'latest.yaml'));
