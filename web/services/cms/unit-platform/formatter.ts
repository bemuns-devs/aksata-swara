import type {
  UnitPlatformInListRaw, UnitPlatformRaw,
} from '~~/services/cms/types/data-models';
import { UnitPlatform, UnitPlatformInList } from '~~/services/shared/models';

export const fromInListRaw = (raw: UnitPlatformInListRaw): UnitPlatformInList => raw;

export const fromRaw = (raw: UnitPlatformRaw): UnitPlatform => ({
  ...fromInListRaw(raw) as UnitPlatform,
  descriptionShort: raw.short_description,
  descriptionLong: raw.long_description
});
