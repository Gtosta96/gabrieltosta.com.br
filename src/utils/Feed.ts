import fs from 'fs';

import { Feed } from 'feed';

import Constants from '../config/constants';
import { PostItems } from './Content';

async function generateRssFeed(posts: PostItems[]) {
  if (Constants.nodeEnv === 'development') {
    return;
  }

  // eslint-disable-next-line no-console
  console.log('generating RSS Feed');

  const date = new Date();
  const author = {
    name: Constants.title,
    email: 'gabrieltosta3@gmail.com',
    link: Constants.url,
  };

  const feed = new Feed({
    title: Constants.title,
    description: Constants.description,
    id: Constants.url,
    link: Constants.url,
    language: Constants.locale,
    image: `${Constants.url}/assets/images/logo.png`,
    favicon: `${Constants.url}/favicon.ico`,
    copyright: Constants.copyright,
    updated: date,
    generator: 'Next.js using Feed for Node.js',
    feedLinks: {
      rss2: `${Constants.url}/rss/feed.xml`,
      json: `${Constants.url}/rss/feed.json`,
      atom: `${Constants.url}/rss/atom.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${Constants.url}/posts/${post.slug}`;

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: post.content,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
    });
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
}

export default generateRssFeed;
