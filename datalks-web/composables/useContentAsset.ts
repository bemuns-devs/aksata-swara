import { resolveAsset } from '~~/utils/content'

export const useContentAsset = (path: string | (() => string), importSuffix = '?webp') => {
  return computedAsync(() => resolveAsset(typeof path === 'string' ? path : path(), importSuffix))
}
