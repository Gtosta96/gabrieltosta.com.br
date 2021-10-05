import fs from 'fs';

import { Feed } from 'feed';

import { Config } from './Config';
import { PostItems } from './Content';

async function generateRssFeed(posts: PostItems[]) {
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  // eslint-disable-next-line no-console
  console.log('generating RSS Feed');

  const date = new Date();
  const author = {
    name: Config.title,
    email: 'gabrieltosta3@gmail.com',
    link: Config.url,
  };

  const feed = new Feed({
    title: Config.title,
    description: Config.description,
    id: Config.url,
    link: Config.url,
    language: Config.locale,
    image: `${Config.url}/assets/images/logo.png`,
    favicon: `${Config.url}/favicon.ico`,
    copyright: Config.copyright,
    updated: date,
    generator: 'Next.js using Feed for Node.js',
    feedLinks: {
      rss2: `${Config.url}/rss/feed.xml`,
      json: `${Config.url}/rss/feed.json`,
      atom: `${Config.url}/rss/atom.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${Config.url}/posts/${post.slug}`;

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
