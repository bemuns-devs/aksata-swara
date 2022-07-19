import { DefaultType, UserType } from '@directus/sdk';
import sdk from './sdk';
import run from './utils/run';

const createRole = async () => {
  const role = (await sdk.roles.readByQuery({
    limit: 1,
    filter: {
      name: { _eq: 'Kementrian Kabinet' }
    },
    fields: ['id'],
  })).data?.[0] || (console.log('Create new role for "Kementrian Kabinet"'), await sdk.roles.createOne({
    name: 'Kementrian Kabinet',
    app_access: true,
    admin_access: false,
  }));

  if (role) return role;

  throw new Error('No role for "Kementrian Kabinet"!');
}

const createUsers = async (role: DefaultType) => {
  const { default: usersRaw } = await import('./data/users.json');

  const users: UserType[] = usersRaw.map(u => ({
    email: `${u.id}@bemuns.org`,
    first_name: u.fullname,
    last_name: u.id,
    role: role.id,
  }));

  const { data } = await sdk.users.createMany(users);

  if (Array.isArray(data)) return data;

  throw new Error("Failed to create Users!");
}

run(async () => {
  const role = await createRole();
  const createdUsers = await createUsers(role);

  console.log(createdUsers);
});
