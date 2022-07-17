import { paramCase } from 'change-case';
import type { FromAPI, ModelStatuses } from '~~/api/types';

export interface BlogAttrs {
  title: string;
  category: string;
  content: string;
  tags?: string[];
  featured_image?: string;
  info_code?: string;
  id: string;
  status: ModelStatuses;
  date_created: Date;
  date_updated: Date;
  user_created: string;
  user_updated: string;
}

export class Blog implements BlogAttrs {
  title: string;

  category: string;

  content: string;

  tags?: string[];

  featured_image?: string;

  info_code?: string;

  id: string;

  status: ModelStatuses;

  date_created: Date;

  date_updated: Date;

  user_created: string;

  user_updated: string;

  static readonly collectionName = 'blogs';

  constructor(attrs: BlogAttrs) {
    Object.assign(this, attrs);
  }

  get slug() {
    return `${paramCase(this.title)}--${this.id}`;
  }

  toJSON() {
    return {
      ...this,
      slug: this.slug,
    };
  }

  static fromAPI(data: FromAPI.Blog): Blog {
    return new Blog({
      ...data,
      date_created: new Date(data.date_created),
      date_updated: new Date(data.date_updated),
      featured_image: data.featured_image
        ? `${process.env.DIRECTUS_URL}/assets/${data.featured_image}`
        : `https://via.placeholder.com/300x200/?text=${encodeURIComponent(data.title)}`,
    });
  }
}
