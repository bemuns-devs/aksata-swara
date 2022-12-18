import { UnitPlatform, UnitPlatformInList } from '../models'

export namespace UnitPlatformRepository {
  export interface list {
    (): Promise<UnitPlatformInList[]>
  }

  export interface byId {
    (id: string): Promise<UnitPlatform>
  }
}

export interface list<T> {
  (): Promise<T[]>
}

export interface byId<T> {
  (id: string): Promise<T>
}

export default interface CommonRepository<T, TinList = T> {
  list: list<TinList>
  byId: byId<T>
}
