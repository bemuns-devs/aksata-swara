import { fromInListRaw } from '~~/services/cms/blog-categories/formatter';
import sdk from '~~/services/cms/sdk';
import { BlogCategoryRepository } from '~~/services/shared/repository';

const list: BlogCategoryRepository.list = async () => {
  const { data } = await sdk().items('blog_categories').readByQuery({ limit: -1 });
  return (data || []).map(fromInListRaw);
};

export default {
  list,
};

export * as blogCategoriesFormatter from './formatter';
