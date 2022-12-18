import type siteInfoJson from '~~/content/_site.json'

type _SiteInfo = typeof siteInfoJson

export interface SiteInfo extends _SiteInfo { }
