import { Directus } from '@directus/sdk';

type Blog = {
  id: string;
  title: string;
}

type BlogCategory = {
  id: string;
  name: string;
}

type FeaturedBlog = {
  id: string;
  blog: string;
}

type Collections = {
  blogs: Blog;
  blog_categories: BlogCategory;
  featured_blogs: FeaturedBlog;
}

const sdk = new Directus<Collections>('http://localhost:8055', {
  auth: {
    mode: 'json',
    staticToken: process.env.DIRECTUS_TOKEN, // replace it with your own
  }
});

export default sdk;
