import { paramCase } from 'change-case';
import { getAssetUrl } from '~~/services/cms/formatter';
import { BlogInListRaw, BlogRaw } from '~~/services/cms/types/data-models';
import { Blog, BlogInList } from '~~/services/shared/models';

export const fromInListRaw = (raw: BlogInListRaw): BlogInList => ({
  ...raw,
  image: raw.featured_image && getAssetUrl(raw.featured_image),
  author: raw.user_created.first_name,
  date: new Date(raw.date_created),
});

export const fromRaw = (raw: BlogRaw): Blog => ({
  ...fromInListRaw(raw) as Blog,
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
