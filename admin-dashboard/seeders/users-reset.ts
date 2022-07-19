import sdk from './sdk';
import run from './utils/run';

run(async () => {
  const role = (await sdk.roles.readByQuery({
    limit: 1,
    filter: {
      name: { _eq: 'Kementrian Kabinet' }
    },
    fields: ['id'],
  })).data?.[0];

  if (!role) throw new Error('No role for "Kementrian Kabinet"!');

  const { data: users } = await sdk.users.readByQuery({ limit: -1, filter: { role: { _eq: role.id } }, fields: ['id'] });
  const ids = (users || []).map(u => u.id);
  const { data: relatedFiles } = await sdk.files.readByQuery({
    limit: -1,
    filter: {
      _or: [
        {
          uploaded_by: { _in: ids },
        },
        {
          modified_by: { _in: ids },
        },
      ]
    },
    fields: ['id']
  });
  await sdk.files.deleteMany((relatedFiles || []).map(f => f.id));
  await sdk.users.deleteMany(ids);
});
