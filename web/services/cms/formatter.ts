import sdk from '~~/services/cms/sdk';

export const getAssetUrl = (id: string) => (`${sdk().url}/assets/${id}`);
