import { IItems, Item } from '@directus/sdk';
import sdk from '../sdk';

const deleteCollection = async (collection: string, keyName = 'id') => {
  const { data } = await (sdk.items(collection) as IItems<Item>).readByQuery({ limit: -1, fields: [keyName] });
  const ids = (data || []).map(b => b[keyName]!);
  await sdk.items(collection).deleteMany(ids);
}

export default deleteCollection;
