'use client';

import React from 'react';
import Image from 'next/image';

import * as ScrollArea from '@radix-ui/react-scroll-area';

import Arrow from '@public/icons/vector-10.svg';
import cn from '@/app/utils/cn';

const tags = [
  'All',
  'Cook Studio',
  'Ux',
  'Case Study',
  'Music',
  'Bnagla Lofi',
  'Tour',
  'Saintmartin',
  'Tech',
  'Iphone 13',
  'User Interface Design',
  'Computer Programming'
];

type TagsMoveButtonProps = {
  handleTagsScroll: () => void;
  hidden?: boolean;
  side: 'left' | 'right';
  className?: string;
};

const TagsMoveButton = (props: TagsMoveButtonProps) => {
  const { handleTagsScroll, hidden = false, side } = props;

  return (
    <div
      className={cn(
        'cursor-pointer -translate-y-[69%] absolute flex items-center justify-center bg-gradient-to-t to-100% from-60% px-5 py-20 from-black-500',
        {
          hidden,
          '-rotate-90 right-0': side === 'right',
          'rotate-90 left-0': side === 'left'
        }
      )}
      onClick={handleTagsScroll}
    >
      <Image src={Arrow} alt="" className="size-5 fixed" />
    </div>
  );
};

function ScrollTags() {
  const tagsContainer = React.useRef<HTMLUListElement>(null);

  const mainElement = React.useRef<HTMLDivElement>(null);

  function handleTagsScrollRight() {
    if (!mainElement.current || !tagsContainer.current) return;

    mainElement.current?.scrollTo({
      behavior: 'smooth',
      left: tagsContainer.current.offsetWidth - mainElement.current.clientWidth
    });
  }

  function handleTagsScrollLeft() {
    if (!mainElement.current || !tagsContainer.current) return;

    mainElement.current?.scrollTo({
      behavior: 'smooth',
      left: mainElement.current.scrollWidth
    });
  }

  React.useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    const allChildrens = tagsContainer.current?.children;

    if (!allChildrens) return;

    const lastChildren = allChildrens[allChildrens?.length - 1];

    observer.observe(lastChildren);

    return () => observer.unobserve(lastChildren);
  }, []);

  return (
    <ScrollArea.Root className="relative">
      <ScrollArea.Viewport className="relative w-full" ref={mainElement}>
        <ul
          className="border-y-[1px] border-black-200 ml-3 py-[10px] flex items-center gap-3"
          ref={tagsContainer}
        >
          {tags.map((item) => {
            return (
              <li
                key={item}
                className={cn(
                  'text-sm text-nowrap cursor-pointer text-center border-[1px] border-black-100 px-3 py-2 rounded-[25px] bg-black-200'
                )}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </ScrollArea.Viewport>
      <TagsMoveButton handleTagsScroll={handleTagsScrollRight} side="right" />

      <TagsMoveButton handleTagsScroll={handleTagsScrollLeft} side="left" />
    </ScrollArea.Root>
  );
}

export default ScrollTags;
