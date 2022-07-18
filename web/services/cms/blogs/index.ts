import type { QueryMany } from '@directus/sdk';
import { extractSlug, fromInListRaw } from '~~/services/cms/blogs/formatter';
import { PAGINATION_PERPAGE } from '~~/services/cms/constants';
import sdk from '~~/services/cms/sdk';
import {
  Blog, BlogInList, BlogInListRaw, BlogRaw, FeaturedBlogInListRaw,
} from '~~/services/cms/types/data-models';

const DEFAULT_FILTER: QueryMany<BlogRaw>['filter'] = {
  status: 'published',
};

const LIST_FIELDS: QueryMany<BlogRaw>['fields'] = [
  'id',
  'title',
  'featured_image',
  'category.id',
  'category.name',
  'info_code',
  'user_created.id',
  'user_created.first_name',
  'date_created',
];

const FEATURED_FIELDS: QueryMany<FeaturedBlogInListRaw>['fields'] = LIST_FIELDS
  .map((field) => `blog.${field}`);

const mergeListQuery = (source: QueryMany<BlogRaw>): QueryMany<BlogRaw> => ({
  ...source,
  filter: { ...DEFAULT_FILTER, ...source.filter },
  limit: source.limit || PAGINATION_PERPAGE,
  fields: source.fields || LIST_FIELDS,
});

const list = async (query: QueryMany<BlogRaw> = {}): Promise<BlogInList[]> => {
  const mergedQuery = mergeListQuery(query);
  const { data } = await sdk().items('blogs').readByQuery(mergedQuery);
  return data.map(fromInListRaw);
};

/**
 * @param slug String formatted as '{title}--{id}'
 */
const bySlug = async (slug: string): Promise<Blog> => {
  const { id } = extractSlug(slug);
  const data = await sdk().items('blogs').readOne(id);
  return fromInListRaw(data as BlogRaw) as Blog;
};

const featuredBlogs = async (): Promise<BlogInList[]> => {
  const { data } = await sdk().items('featured_blogs').readByQuery({ limit: -1, fields: FEATURED_FIELDS });
  return data.map((el) => fromInListRaw(el.blog as BlogInListRaw));
};

export default {
  list,
  bySlug,
  featured: featuredBlogs,
};

export * as blogFormatter from './formatter';
