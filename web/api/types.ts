/* eslint-disable @typescript-eslint/no-namespace */
import type { modelStatuses } from '~~/api/constants';

export type ModelStatuses = typeof modelStatuses[number];

export namespace FromAPI {
  namespace Has {
    export interface Id {
      id: string;
    }

    export interface Status {
      status: ModelStatuses;
    }

    export interface DateCreated {
      date_created: Date;
    }

    export interface DateUpdated {
      date_updated: Date;
    }

    export type TimeStamp = DateCreated & DateUpdated;

    export interface Owner {
      user_created: string;
    }

    export interface Updater {
      user_updated: string;
    }

    export type Who = Owner & Updater;
  }

  export interface Blog extends Has.Id, Has.Status, Has.TimeStamp, Has.Who {
    title: string;
    category: string;
    content: string;
    tags?: string[];
    featured_image?: string;
    info_code?: string;
  }

  export interface Link extends Has.Id, Has.Status, Has.TimeStamp, Has.Owner {
    link: string;
    url: string;
  }

  export interface BlogCategory extends Has.Id {
    name: string;
  }
}
