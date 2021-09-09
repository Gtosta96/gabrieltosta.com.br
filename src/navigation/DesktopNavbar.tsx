import React from 'react';

import Link from 'next/link';

const paths = [
  { label: 'Home', href: '/home' },
  { label: 'Sobre mim', href: '/about' },
  { label: 'Github', href: 'https://github.com/Gtosta96', external: true },
  { label: 'Youtube', href: 'https://www.youtube.com/c/HerowayBrasil', external: true },
];

const DesktopNavbar = () => (
  <ul className="hidden md:flex flex flex-wrap mb-2">
    {paths.map((path) => (
      <li key={path.href} className="mr-6">
        <Link href={path.href}>
          <a
            target={path.external ? '_blank' : undefined}
            rel={path.external ? 'noreferrer' : undefined}
            className="block text-center text-gray-700 text-lg no-underline hover:text-gray-900 hover:no-underline transition duration-300"
          >
            {path.label}
          </a>
        </Link>
      </li>
    ))}
  </ul>
);

export { DesktopNavbar };
