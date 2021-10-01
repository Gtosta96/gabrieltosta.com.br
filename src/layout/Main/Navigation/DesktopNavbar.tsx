/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import Link from 'next/link';

import { useUIContext } from '../../../context/UIContextProvider';
import { paths } from './helpers';

const DesktopNavbar = () => {
  const uiContext = useUIContext();

  return (
    <ul className="hidden md:flex flex-wrap mb-2">
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

      <li className="mr-6" onClick={uiContext.subscribe.toggleSubscribe}>
        <button
          type="button"
          className="block text-center text-gray-700 text-lg no-underline hover:text-gray-900 hover:no-underline transition duration-300"
        >
          Inscreva-se
        </button>
      </li>
    </ul>
  );
};

export { DesktopNavbar };
