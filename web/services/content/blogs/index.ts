import type { ParsedContent, QueryBuilderWhere } from '@nuxt/content/dist/runtime/types';
import { Blog, BlogInList } from '~~/services/shared/models';
import { BlogRepository } from '~~/services/shared/repository';

const LIST_PERPAGE = 20;

interface BlogRaw {
  date: string
}

type ParsedBlog = ParsedContent & Blog & BlogRaw
type ParsedBlogInList = ParsedContent & BlogInList & BlogRaw

const convertInList = (data: ParsedBlogInList): BlogInList => ({
  ...data,
  path: data._path!.replace('/blogs/', ''),
  date: new Date(data.date),
})
const convert = (data: ParsedBlog): Blog => convertInList(data) as Blog

const mergeQuery = (query: QueryBuilderWhere): QueryBuilderWhere => ({
  _path: {
    $not: /_[\s\S]{0,}/,
    // @ts-ignore
    ...query._path
  },
  ...query
})

const list: BlogRepository.list = async (query = {}) => {
  console.log(mergeQuery(query));

  const data = await queryContent<ParsedBlogInList>('/blogs')
    .where(mergeQuery(query))
    .limit(LIST_PERPAGE)
    .without('content')
    .find();
  return (data as ParsedBlogInList[]).map(convertInList);
}

const bySlug: BlogRepository.bySlug = async (slug) => {
  const data = await queryContent<ParsedBlog>('/blogs')
    .where(mergeQuery({ _path: { $eq: slug } }))
    .findOne()
  return convert(data)
}

const byCodeInfo: BlogRepository.byCodeInfo = async (code) => {
  const data = await queryContent<ParsedBlog>('/blogs')
    .where(mergeQuery({ codeInfo: code }))
    .findOne()
  return convert(data)
}

const getFeatured: BlogRepository.getFeatured = async () => {
  const paths = await queryContent('/blogs/_picked').findOne();
  const data = await queryContent<ParsedBlog>('/blogs')
    .where(mergeQuery({ _path: { $in: paths.featured.map((el: string) => `/blogs/${el}`) } }))
    .find()
  return data.map(convert)
}

export default <BlogRepository.default>{
  list,
  bySlug,
  byCodeInfo,
  getFeatured,
}
