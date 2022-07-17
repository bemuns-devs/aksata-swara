import { Blog } from '~~/api/models/Blog';
import { FromAPI } from '~~/api/types';

export const useBlogBySlug = (slug: string) => {
  const [, id] = slug.split('--');
  const { getItemById } = useDirectusItems();

  return useAsyncData(`blog_${id}`, async () => {
    const blog = await getItemById<FromAPI.Blog>({ id, collection: Blog.collectionName });
    return Blog.fromAPI(blog);
  });
};
