export const resolveAsset = async (path: string, importSuffix = '?webp') => {
  if (path.startsWith('import:')) {
    const inferredPath = path.replace('import:', '');

    return (await import(`../assets${inferredPath}${importSuffix}`)).default
  }

  return path
}
