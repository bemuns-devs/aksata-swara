export const resolveAsset = async (path: string, importSuffix = '?webp') => path.startsWith('import:')
  ? (await import(`../assets${path.slice(7)}${importSuffix}`)).default
  : path
