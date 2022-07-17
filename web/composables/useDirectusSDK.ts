import { Directus } from '@directus/sdk';
import { FromAPI } from '~~/api/types';

type Collections = {
  blogs: FromAPI.Blog;
  blog_categories: FromAPI.BlogCategory;
}

let sdk: Directus<Collections>;

const useDirectusSDK = () => {
  const runtimeConfig = useRuntimeConfig();

  if (!sdk) {
    sdk = new Directus(runtimeConfig.public.APIBaseUrl);
  }

  return sdk;
};

export default useDirectusSDK;
