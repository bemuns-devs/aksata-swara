import {
  BlogCategory, BlogCategoryInList, BlogCategoryInListRaw, BlogCategoryRaw,
} from '~~/services/cms/types/data-models';

export const fromInListRaw = (raw: BlogCategoryInListRaw): BlogCategoryInList => raw;

export const fromRaw = (raw: BlogCategoryRaw): BlogCategory => ({
  ...fromInListRaw(raw) as BlogCategory,
  ...raw,
});
