import type { QueryMany } from '@directus/sdk';
import sdk from '~~/services/cms/sdk';
import type { UnitPlatform, UnitPlatformInList, UnitPlatformRaw } from '~~/services/cms/types/data-models';
import { fromInListRaw, fromRaw } from './formatter';

const DEFAULT_FILTER: QueryMany<UnitPlatformRaw>['filter'] = {};

const LIST_FIELDS: QueryMany<UnitPlatformRaw>['fields'] = [
  'id',
  'name',
  'link',
  'logo',
  'short_description',
];

const list = async (): Promise<UnitPlatformInList[]> => {
  const { data } = await sdk().items('unit_platform').readByQuery({
    filter: DEFAULT_FILTER,
    fields: LIST_FIELDS,
  });
  return data.map(fromInListRaw);
};

const byId = async (id: string): Promise<UnitPlatform | null> => {
  const data = await sdk().items('unit_platform').readOne(id);
  return fromRaw(data as UnitPlatformRaw) as UnitPlatform;
};

export default {
  list,
  byId,
};

export * as unitPlatformFormatter from './formatter';
