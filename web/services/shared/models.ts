export interface Blog {
  id: string;
  title: string;
  category: BlogCategory;
  content: string;
  tags?: string[];
  image?: string;
  date: Date;
  author: string;
  path: string;
}

export interface BlogInList extends Omit<Blog, 'content'> { }

export interface BlogCategory {
  id: string;
  name: string;
}

export interface BlogCategoryInList extends Omit<BlogCategory, never> { }

export interface UnitPlatform {
  id: string;
  name: string;
  descriptionLong?: string;
  descriptionShort?: string;
  image?: string;
  url?: string;
}

export interface UnitPlatformInList extends Omit<UnitPlatform, 'descriptionLong' | 'descriptionShort'> { }
