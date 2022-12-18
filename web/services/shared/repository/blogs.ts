import { Blog, BlogInList } from '../models'

export interface list {
  (query?: Record<string, any>): Promise<BlogInList[]>
}

export interface bySlug {
  (slug: string): Promise<Blog>
}

export interface byCodeInfo {
  (code: string): Promise<Blog | null>
}

export interface getFeatured {
  (): Promise<BlogInList[]>
}

export default interface BlogRepository {
  list: list
  bySlug: bySlug
  byCodeInfo: byCodeInfo
  getFeatured: getFeatured
}
