import { BlogCategory } from '../models'

export interface list {
  (): Promise<BlogCategory[]>
}

export default interface BlogCategoryRepository {
  list: list
}
