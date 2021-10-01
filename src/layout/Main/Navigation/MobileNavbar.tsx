/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import classNames from 'classnames';
import Link from 'next/link';

import { useUIContext } from '../../../context/UIContextProvider';
import { paths } from './helpers';

const MobileNavbar = () => {
  const uiContext = useUIContext();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const onClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleSubscribe = () => {
    onClick();
    uiContext.subscribe.toggleSubscribe();
  };

  return (
    <div>
      {/* <!-- Mobile menu button --> */}
      <div className="md:hidden flex items-center">
        <button type="button" className="outline-none" onClick={onClick}>
          <svg
            className="w-6 h-6"
            x-show="!showMenu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* <!-- mobile menu --> */}
      <div
        className={classNames(
          'md:hidden fixed w-screen h-screen inset-0 bg-white flex flex-col items-center justify-center',
          {
            hidden: !showMobileMenu,
          },
        )}
      >
        {/* <!-- close icon --> */}
        <button type="button" className="outline-none mb-8" onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="flex flex-col flex-wrap text-xl content-center">
          {paths.map((path) => (
            <li key={path.href} className="mb-6">
              <Link href={path.href}>
                <a
                  target={path.external ? '_blank' : undefined}
                  rel={path.external ? 'noreferrer' : undefined}
                  className="block text-center text-gray-700 text-2xl no-underline hover:text-gray-900 hover:no-underline transition duration-300"
                >
                  {path.label}
                </a>
              </Link>
            </li>
          ))}

          <li className="mb-6" onClick={toggleSubscribe}>
            <button
              type="button"
              className="block text-center text-gray-700 text-2xl no-underline hover:text-gray-900 hover:no-underline transition duration-300"
            >
              Inscreva-se
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { MobileNavbar };
