import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import { Content } from '../../content/Content';
// import { FacebookComments } from '../../layout/Facebook';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getAllPosts, getPostBySlug } from '../../utils/Content';
import { markdownToHtml } from '../../utils/Markdown';
import { getSubtitle } from '../../utils/Misc';

const FacebookComments = dynamic(() => import('../../layout/Facebook'), { ssr: false });

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  title: string;
  description: string;
  date: string;
  modified_date: string;
  image: string;
  content: string;
  slug: string;
};

const DisplayPost = (props: IPostProps) => (
  <Main
    meta={(
      <Meta
        title={props.title}
        description={props.description}
        post={{
          image: props.image,
          date: props.date,
          modified_date: props.modified_date,
        }}
      />
    )}
  >
    <h1 className="text-center font-bold text-3xl text-gray-900">{props.title}</h1>
    <div className="text-center text-sm mb-8">{getSubtitle(props, true)}</div>

    <Content>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </Content>

    <FacebookComments path="posts" slug={props.slug} />
  </Main>
);

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({ params }) => {
  const { slug } = params!;

  const post = getPostBySlug(slug, [
    'title',
    'description',
    'date',
    'modified_date',
    'image',
    'content',
    'slug',
    'readTime',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      title: post.title,
      description: post.description,
      date: post.date,
      modified_date: post.modified_date,
      image: post.image,
      readTime: post.readTime,
      slug,
      content,
    },
  };
};

export default DisplayPost;
