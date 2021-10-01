import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../components/Blog/BlogGallery';
import { IPaginationProps } from '../components/Pagination/Pagination';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Main/Meta';
import { Config } from '../utils/Config';
import { getAllPosts } from '../utils/Content';
import generateRssFeed from '../utils/Feed';

const Index = (props: IBlogGalleryProps) => (
  <Main meta={<Meta title="Home" description={Config.description} />}>
    <BlogGallery posts={props.posts} pagination={props.pagination} />
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug']);

  // eslint-disable-next-line no-console
  console.log('generating RSS Feed');
  await generateRssFeed(posts);

  const pagination: IPaginationProps = {};

  if (posts.length > Config.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, Config.pagination_size),
      pagination,
    },
  };
};

export default Index;
