'use client';

import React from 'react';
import Image from 'next/image';

import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

import Home from '@public/icons/vector-1.svg';
import Explores from '@public/icons/vector-2.svg';
import Shorts from '@public/icons/vector-3.svg';
import Subscriptions from '@public/icons/vector-4.svg';

import Library from '@public/icons/vector-5.svg';
import History from '@public/icons/vector-6.svg';
import YourVideos from '@public/icons/vector-7.svg';
import WatchLater from '@public/icons/vector-8.svg';
import Liked from '@public/icons/vector-9.svg';
import ArrowDown from '@public/icons/vector-10.svg';

import channelZero from '@public/channels/channel-0.png';
import channelOne from '@public/channels/channel-1.png';
import channelTwo from '@public/channels/channel-2.png';
import channelTree from '@public/channels/channel-3.png';
import channelFour from '@public/channels/channel-4.png';
import channelFive from '@public/channels/channel-5.png';

import cn from '@/app/utils/cn';

type ItemProps = {
  Icon: StaticImport;
  label: string;
  decorateCircle?: boolean;
};

function Sidebar({ className }: { className?: string }) {
  const itemSelectedRef = React.useRef('');

  const Item = ({ Icon, label, decorateCircle = false }: ItemProps) => {
    return (
      <li
        className={cn(
          'rounded-r-md flex items-center gap-4 px-5 py-3 w-full cursor-pointer hover:bg-black-200 transition-all',
          {
            'relative after:absolute after:block after:content-[""] after:size-1 after:bg-blue after:rounded-full after:right-5':
              decorateCircle,
            'bg-black-200 font-semibold': itemSelectedRef.current === label
          }
        )}
        onClick={() => (itemSelectedRef.current = label)}
      >
        <div className="w-6">
          <Image src={Icon} alt="icon" priority />
        </div>

        <p
          className={cn('text-sm text-ellipsis text-nowrap overflow-hidden', {
            'mr-2': decorateCircle
          })}
        >
          {label}
        </p>
      </li>
    );
  };

  return (
    <aside className={cn('bg-black-400 w-56 pr-5', className)}>
      <nav className="pt-2">
        <ul>
          <Item Icon={Home} label="Home" />
          <Item Icon={Explores} label="Explore" />
          <Item Icon={Shorts} label="Shorts" />
          <Item Icon={Subscriptions} label="Subscriptions" />
        </ul>

        <hr className="border-1 border-black-200 my-4" />

        <ul>
          <Item Icon={Library} label="Library" />
          <Item Icon={History} label="History" />
          <Item Icon={YourVideos} label="Your videos" />
          <Item Icon={WatchLater} label="Watch later" />
          <Item Icon={Liked} label="Liked videos" />
          <Item Icon={ArrowDown} label="Show more" />
        </ul>

        <hr className="border-1 border-black-200 my-4" />

        <ul>
          <h3 className="pl-5 font-semibold text-gray text-sm mb-1">
            SUBSCRIPTIONS
          </h3>

          <Item Icon={channelZero} label="Nadir On The Go" decorateCircle />
          <Item Icon={channelOne} label="Coke Studio Bangla" decorateCircle />
          <Item Icon={channelTwo} label="MKBHD" />
          <Item Icon={channelTree} label="Figma" />
          <Item
            Icon={channelFour}
            label="ATC Android ToTo C..."
            decorateCircle
          />
          <Item Icon={channelFive} label="Alux.com" />
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
