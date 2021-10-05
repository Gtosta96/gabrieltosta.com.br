import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import Constants from '../../config/constants';
import { addTrailingSlash } from '../../utils/Url';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  post?: {
    image: string;
    date: string;
    modified_date: string;
  };
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        {/* CONFIG */}
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        {/* ICONS */}
        <link
          rel="apple-touch-icon"
          href={`${process.env.baseUrl}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.baseUrl}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.baseUrl}/favicon-16x16.png`}
          key="icon16"
        />
        <link rel="icon" href={`${process.env.baseUrl}/favicon.ico`} key="favicon" />
        <title>{`${props.title} | ${Constants.site_name}`}</title>

        {/* GENERIC OPEN GRAPH */}
        <meta
          name="description"
          content={props.description ? props.description : Constants.description}
          key="description"
        />
        <meta name="author" content={Constants.author} key="author" />
        {props.canonical && <link rel="canonical" href={props.canonical} key="canonical" />}
        <meta
          property="og:title"
          content={`${props.title} | ${Constants.site_name}`}
          key="og:title"
        />
        <meta
          property="og:description"
          content={props.description ? props.description : Constants.description}
          key="og:description"
        />
        <meta property="og:locale" content={Constants.locale} key="og:locale" />
        <meta property="og:site_name" content={Constants.site_name} key="og:site_name" />

        {/* POST */}
        {props.post && (
          <>
            <meta property="fb:app_id" content={Constants.fbAppId} />

            <meta property="og:type" key="og:type" content="article" />
            <meta
              property="og:image"
              key="og:image"
              content={`${Constants.url}${process.env.baseUrl}${props.post.image}`}
            />
            <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
            <meta
              property="article:published_time"
              key="article:published_time"
              content={new Date(props.post.date).toISOString()}
            />
            <meta
              property="article:modified_time"
              key="article:modified_time"
              content={new Date(props.post.modified_date).toISOString()}
            />
            <script
              type="application/ld+json"
              key="ldjson"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
          {
            "description": "${props.description ? props.description : Constants.description}",
            "author": {
              "@type": "Person",
              "name": "${Constants.author}"
            },
            "@type": "BlogPosting",
            "url": "${Constants.url}${process.env.baseUrl}${addTrailingSlash(router.asPath)}",
            "publisher": {
              "@type": "Organization",
              "logo": {
                "@type": "ImageObject",
                "url": "${Constants.url}${process.env.baseUrl}/assets/images/logo.png"
              },
              "name": "${Constants.author}"
            },
            "headline": "${props.title} | ${Constants.site_name}",
            "image": ["${Constants.url}${process.env.baseUrl}${props.post.image}"],
            "datePublished": "${new Date(props.post.date).toISOString()}",
            "dateModified": "${new Date(props.post.modified_date).toISOString()}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${Constants.url}${process.env.baseUrl}${addTrailingSlash(router.asPath)}"
            },
            "@context": "http://schema.org"
          }`,
              }}
            />
          </>
        )}
      </Head>
    </>
  );
};

export { Meta };
