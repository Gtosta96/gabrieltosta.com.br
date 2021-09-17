import React from 'react';

import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';
import { getSubtitle } from '../utils/Misc';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul>
      {props.posts.map((post) => (
        <li
          key={post.slug}
          className="mb-3 flex flex-col-reverse md:flex-row justify-between gap-x-4"
        >
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a>
              <h2>{post.title}</h2>
            </a>
          </Link>

          <div className="whitespace-nowrap">{getSubtitle(post, false)}</div>
        </li>
      ))}
    </ul>

    <Pagination previous={props.pagination.previous} next={props.pagination.next} />
  </>
);

export { BlogGallery };
