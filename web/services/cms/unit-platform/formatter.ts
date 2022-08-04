import type {
  UnitPlatform, UnitPlatformInList, UnitPlatformInListRaw, UnitPlatformRaw,
} from '~~/services/cms/types/data-models';

export const fromInListRaw = (raw: UnitPlatformInListRaw): UnitPlatformInList => raw;

export const fromRaw = (raw: UnitPlatformRaw): UnitPlatform => ({
  ...fromInListRaw(raw) as UnitPlatform,
  ...raw,
});
