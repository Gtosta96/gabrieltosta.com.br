import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { PostItems } from '../../utils/Content';
import { getSubtitle } from '../../utils/Misc';
import { Pagination, IPaginationProps } from '../Pagination/Pagination';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
  image?: string;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul className="bg-gray-200 p-2 sm:p-1 md:rounded-xl">
      {props.posts.map((post) => (
        <li
          key={post.slug}
          className="bg-gray-100 font-light mb-10 flex flex-col sm:flex-row justify-around"
        >
          <Image className="rounded-xl sm:rounded-full" src={post.image} width="150" height="150" />

          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a className="p-3 text-1xl sm:text-2xl">
              <h2>{post.title}</h2>
            </a>
          </Link>

          <div className="mb-1 whitespace-nowrap text-sm">{getSubtitle(post, false)}</div>
        </li>
      ))}
    </ul>

    <Pagination previous={props.pagination.previous} next={props.pagination.next} />
  </>
);

export { BlogGallery };
