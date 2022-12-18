import type { QueryMany } from '@directus/sdk';
import sdk from '~~/services/cms/sdk';
import type { UnitPlatformRaw } from '~~/services/cms/types/data-models';
import { UnitPlatformRepository } from '~~/services/shared/repository';
import { fromInListRaw, fromRaw } from './formatter';

const DEFAULT_FILTER: QueryMany<UnitPlatformRaw>['filter'] = {};

const LIST_FIELDS: QueryMany<UnitPlatformRaw>['fields'] = [
  'id',
  'name',
  'link',
  'logo',
  'short_description',
];

const list: UnitPlatformRepository.list = async () => {
  const { data } = await sdk().items('unit_platform').readByQuery({
    filter: DEFAULT_FILTER,
    fields: LIST_FIELDS,
  });
  return (data || []).map(fromInListRaw);
};

const byId: UnitPlatformRepository.byId = async (id: string) => {
  const data = await sdk().items('unit_platform').readOne(id);
  return fromRaw(data as UnitPlatformRaw);
};

export default {
  list,
  byId,
};

export * as unitPlatformFormatter from './formatter';
