import { Directus } from '@directus/sdk';
import type {
  BlogCategoryRaw, BlogRaw, FeaturedBlogRaw, UnitPlatformRaw,
} from '~~/services/cms/types/data-models';

interface SDKConfig {
  url: string;
  token?: string;
}

type Collection = {
  blogs: BlogRaw;
  blog_categories: BlogCategoryRaw;
  unit_platform: UnitPlatformRaw;
  featured_blogs: FeaturedBlogRaw;
}

let _sdk: Directus<Collection>;
const sdk = () => {
  if (!_sdk) {
    const config = useRuntimeConfig();
    const cfg: SDKConfig = {
      url: config.public.DirectusURL,
      token: config.public.DirectusToken,
    };

    _sdk = new Directus<Collection>(cfg.url, {
      auth: {
        mode: 'json',
        staticToken: cfg.token,
      },
    });
  }

  return _sdk;
};

export default sdk;
