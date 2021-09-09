import React from 'react';

import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';
import { formatDate } from '../utils/Misc';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul>
      {props.posts.map((post) => (
        <li key={post.slug} className="mb-3 flex justify-between space-x-2">
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a>
              <h2>{post.title}</h2>
            </a>
          </Link>

          <div className="text-right whitespace-nowrap">{formatDate(post.date)}</div>
        </li>
      ))}
    </ul>

    <Pagination previous={props.pagination.previous} next={props.pagination.next} />
  </>
);

export { BlogGallery };
