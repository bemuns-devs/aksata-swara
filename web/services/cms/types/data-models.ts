import { BLOG_VISIBILITIES, PUBLICATION_STATUSES } from '~~/services/cms/constants';

export type PublicationStatus = typeof PUBLICATION_STATUSES[number];

export type BlogVisibility = typeof BLOG_VISIBILITIES[number];

export interface Blog {
  title: string;
  category: {
    id: string;
    name: string;
  };
  content: string;
  tags?: string[];
  featured_image?: string;
  info_code?: string;
  id: string;
  status: PublicationStatus;
  date_created: Date;
  date_updated: Date;
  user_created: {
    id: string;
    first_name: string;
  };
  user_updated: string;
  visibility: BlogVisibility;
}

export interface BlogRaw extends Omit<Blog, 'date_created' | 'date_updated'> {
  date_created: string;
  date_updated: string;
}

type BlogInListPick<T> = Omit<T, 'content' | 'date_updated' | 'user_updated' | 'tags'>;

export interface BlogInList extends BlogInListPick<Blog> { }

export interface BlogInListRaw extends BlogInListPick<BlogRaw> { }

export interface BlogCategory {
  id: string;
  name: string;
}

export interface BlogCategoryRaw extends BlogCategory { }

type BlogCategoryInListPick<T> = T;

export interface BlogCategoryInList extends BlogCategoryInListPick<BlogCategory> { }

export interface BlogCategoryInListRaw extends BlogCategoryInListPick<BlogCategoryRaw> { }

export interface FeaturedBlog {
  id: string;
  blog: BlogInList;
  sort: number;
}

export interface FeaturedBlogRaw extends Omit<FeaturedBlog, 'blog'> {
  blog: BlogInListRaw;
}

type FeaturedBlogInListPick<T> = Omit<T, 'id' | 'sort'>;

export interface FeaturedBlogInList extends FeaturedBlogInListPick<FeaturedBlog> { }

export interface FeaturedBlogInListRaw extends FeaturedBlogInListPick<FeaturedBlogRaw> { }

export interface UnitPlatform {
  id: string;
  status: PublicationStatus;
  name: string;
  link: string;
  logo: string;
  short_description: string;
  long_description: string
  sort: number;
}

export interface UnitPlatformRaw extends UnitPlatform { }

type UnitPlatformInListPick<T> = Omit<T, 'status' | 'sort' | 'short_description'>;

export interface UnitPlatformInList extends UnitPlatformInListPick<UnitPlatform> { }

export interface UnitPlatformInListRaw extends UnitPlatformInListPick<UnitPlatformRaw> { }
