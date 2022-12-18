import {
  BlogCategoryInListRaw, BlogCategoryRaw,
} from '~~/services/cms/types/data-models';
import { BlogCategory, BlogCategoryInList } from '~~/services/shared/models';

export const fromInListRaw = (raw: BlogCategoryInListRaw): BlogCategoryInList => raw;

export const fromRaw = (raw: BlogCategoryRaw): BlogCategory => ({
  ...fromInListRaw(raw) as BlogCategory,
});
