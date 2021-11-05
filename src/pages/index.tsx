import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../components/Blog/BlogGallery';
import { IPaginationProps } from '../components/Pagination/Pagination';
import Constants from '../config/constants';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Main/Meta';
import { getAllPosts } from '../utils/Content';
import generateRssFeed from '../utils/Feed';

const Index = (props: IBlogGalleryProps) => (
  <Main meta={<Meta title="Home" description={Constants.description} />}>
    <BlogGallery posts={props.posts} pagination={props.pagination} image={props.image} />
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'image']);

  await generateRssFeed(posts);

  const pagination: IPaginationProps = {};
  if (posts.length > Constants.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, Constants.pagination_size),
      pagination,
    },
  };
};

export default Index;
