import { FromAPI } from '~~/api/types';

export interface BlogCategoryAttrs {
  name: string;
  id: string
}
export class BlogCategory implements BlogCategoryAttrs {
  static readonly collectionName = 'blog_categories';

  name: string;

  id: string;

  constructor(attrs: BlogCategoryAttrs) {
    Object.assign(this, attrs);
  }

  static fromAPI(data: FromAPI.BlogCategory): BlogCategory {
    return new BlogCategory(data);
  }
}
