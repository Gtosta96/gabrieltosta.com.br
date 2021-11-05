import React, { ReactNode } from 'react';

import Image from 'next/image';

import Constants from '../../config/constants';
import { DesktopNavbar } from './Navigation/DesktopNavbar';
import { MobileNavbar } from './Navigation/MobileNavbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-900 px-3 md:px-0">
    {props.meta}
    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300 p-2">
        <Image
          src="https://media-exp1.licdn.com/dms/image/C4D16AQGCQHilSs_dpw/profile-displaybackgroundimage-shrink_350_1400/0/1582205936662?e=1640822400&v=beta&t=4w5TvbPPo-DVsQCYl1EtwDIpi5H3f1E2vF4YyaG9R-A"
          width={800}
          height={200}
        />
        <div className="pt-5 pb-5">
          <MobileNavbar />
          <div className="flex justify-center gap-8 font-bold font-title text-2xl text-black-900 h-10 mb-4 md:justify-start md:text-4xl ">
            {Constants.title}
            <Image src="/assets/images/spiderman.png" width={40} height={40} />
          </div>
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
