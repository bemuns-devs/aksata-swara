export interface Blog {
  id: string;
  title: string;
  category: string;
  content: string;
  tags?: string[];
  image?: string;
  date: Date;
  author: string;
}

export interface BlogInList extends Omit<Blog, 'content'> { }

export interface UnitPlatform {
  id: string;
  name: string;
  descriptionLong?: string;
  descriptionShort?: string;
  image?: string;
  url?: string;
}

export interface UnitPlatformInList extends Omit<UnitPlatform, 'descriptionLong' | 'descriptionShort'> { }
