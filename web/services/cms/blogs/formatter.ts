import { paramCase } from 'change-case';
import {
  Blog, BlogInList, BlogInListRaw, BlogRaw,
} from '~~/services/cms/types/data-models';

export const fromInListRaw = (raw: BlogInListRaw): BlogInList => ({
  ...raw,
  date_created: raw.date_created && new Date(raw.date_created),
});

export const fromRaw = (raw: BlogRaw): Blog => ({
  ...fromInListRaw(raw) as Blog,
  date_updated: new Date(raw.date_updated),
});

export const getSlug = ({ id, title }: Pick<Blog, 'id' | 'title'>) => `${paramCase(title)}--${id}`;

export const extractSlug = (slug: string) => {
  if (slug.includes('--')) {
    const [title, id] = slug.split('--');
    return { id, title };
  }

  return {
    id: slug,
    title: null,
  };
};
