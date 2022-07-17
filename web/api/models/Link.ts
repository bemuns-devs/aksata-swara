import type { FromAPI, ModelStatuses } from '~~/api/types';

export interface LinkAttrs {
  link: string;
  url: string;
  id: string;
  status: ModelStatuses;
  date_created: Date;
  date_updated: Date;
  user_created: string;
}

export class Link implements LinkAttrs {
  link: string;

  url: string;

  id: string;

  status: ModelStatuses;

  date_created: Date;

  date_updated: Date;

  user_created: string;

  static readonly collectionName = 'links';

  constructor(attrs: LinkAttrs) {
    Object.assign(this, attrs);
  }

  static fromAPI(data: FromAPI.Link): Link {
    return new Link({
      ...data,
      date_created: new Date(data.date_created),
      date_updated: new Date(data.date_updated),
    });
  }
}
