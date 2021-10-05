import React, { ReactNode } from 'react';

import Constants from '../../config/constants';
import { DesktopNavbar } from './Navigation/DesktopNavbar';
import { MobileNavbar } from './Navigation/MobileNavbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <MobileNavbar />
          <div className="font-semibold text-3xl text-gray-900">{Constants.title}</div>
          <div className="text-xl">{Constants.description}</div>
        </div>
        <div>
          <DesktopNavbar />
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">{Constants.copyright}</div>
    </div>
  </div>
);

export { Main };
