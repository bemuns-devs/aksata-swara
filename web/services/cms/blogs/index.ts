import type { QueryMany } from '@directus/sdk';
import { extractSlug, fromInListRaw, fromRaw } from '~~/services/cms/blogs/formatter';
import { PAGINATION_PERPAGE } from '~~/services/cms/constants';
import sdk from '~~/services/cms/sdk';
import {
  Blog, BlogInList, BlogInListRaw, BlogRaw, FeaturedBlogInListRaw,
} from '~~/services/cms/types/data-models';

const DEFAULT_FILTER: QueryMany<BlogRaw>['filter'] = {
  status: 'published',
};

const DEFAULT_SORT: QueryMany<BlogRaw>['sort'] = ['-date_created'];

const NESTED_FIELDS: QueryMany<BlogRaw>['fields'] = [
  'category.id',
  'category.name',
  'user_created.id',
  'user_created.first_name',
];

const LIST_FIELDS: QueryMany<BlogRaw>['fields'] = [
  'id',
  'title',
  'featured_image',
  'info_code',
  'date_created',
  ...NESTED_FIELDS,
];

const FEATURED_FIELDS: QueryMany<FeaturedBlogInListRaw>['fields'] = LIST_FIELDS
  .map((field) => `blog.${field}`);

const mergeListQuery = (source: QueryMany<BlogRaw>): QueryMany<BlogRaw> => ({
  ...source,
  filter: { ...DEFAULT_FILTER, ...source.filter },
  limit: source.limit || PAGINATION_PERPAGE,
  fields: source.fields || LIST_FIELDS,
  sort: source.sort || DEFAULT_SORT,
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
  const data = await sdk().items('blogs').readOne(id, {
    fields: ['*', ...NESTED_FIELDS],
  });
  return fromInListRaw(data as BlogRaw) as Blog;
};

const byCodeInfo = async (code: string): Promise<Blog | null> => {
  const { data: [data] } = await sdk().items('blogs').readByQuery({
    limit: 1,
    filter: { ...DEFAULT_FILTER, info_code: code },
    fields: ['title', 'id'],
  });
  return data ? fromRaw(data as BlogRaw) : null;
};

const featuredBlogs = async (): Promise<BlogInList[]> => {
  const { data } = await sdk().items('featured_blogs').readByQuery({ limit: -1, fields: FEATURED_FIELDS });
  return data.map((el) => fromInListRaw(el.blog as BlogInListRaw));
};

export default {
  list,
  bySlug,
  byCodeInfo,
  featured: featuredBlogs,
  DEFAULT_FILTER,
  DEFAULT_SORT,
  LIST_FIELDS,
};

export * as blogFormatter from './formatter';
