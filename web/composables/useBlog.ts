import type { Ref } from 'vue';
import type { DefaultType, QueryMany } from '@directus/sdk';
// import type { DirectusQueryParams } from 'nuxt-directus/dist/runtime/types';
import { Blog } from '~~/api/models/Blog';

interface UseBlogReturn {
  data: Ref<Blog[]>;
  loading: Ref<boolean>;
  error: Ref<any>;
  refresh: () => Promise<void>;
}

const DEFAULT_QUERY: QueryMany<unknown> = {
  filter: {
    status: {
      _eq: 'published',
    },
  },
};

export const useBlog = (): UseBlogReturn => {
  const sdk = useDirectusSDK();
  const mergedQuery = Object.assign(DEFAULT_QUERY);
  const {
    data, pending, refresh, error,
  } = useLazyAsyncData(async () => {
    const { data: blogs } = await sdk.items('blogs').readByQuery(mergedQuery);
    return blogs?.map(Blog.fromAPI) || [];
  });

  watch(data, (v) => console.log(v));

  return {
    data, loading: pending, refresh, error,
  };

  // const {
  //   state, isLoading, error, execute,
  // } = useAsyncState((async () => {
  //   const { data: blogs } = await sdk.items('blogs').readByQuery(mergedQuery);
  //   return blogs?.map(Blog.fromAPI) || [];
  // })(), []);

  // return {
  //   data: state, loading: isLoading, refresh: execute as unknown as () => Promise<void>, error,
  // };
};

// const DEFAULT_PARAMS: DirectusQueryParams = {
//   filter: {
//     status: 'published',
//   },
// };

// export const useBlog = (params: DirectusQueryParams = undefined): UseBlogReturn => {
//   const { getItems } = useDirectusItems();
//   const mergedParams = Object.assign(DEFAULT_PARAMS, params);
//   const {
//     data, pending, refresh, error,
//   } = useLazyAsyncData(`blogs_${mergedParams}`, async () => {
//     const blogs = await getItems({ collection: Blog.collectionName, params: mergedParams });
//     return blogs.map(Blog.fromAPI);
//   });

//   return {
//     data, loading: pending, refresh, error,
//   };
// };
