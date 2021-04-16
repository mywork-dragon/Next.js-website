import React from 'react';

import { ScreenSize } from '@/enums/screenSize';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import Frame2Transparent from '@/assets/benefits-of-personalization/frame-2-transparent.svg';

import Line1 from '@/assets/other/benefits-line-1.svg';
import Line2 from '@/assets/other/benefits-line-2.svg';

import style from './PersonalizationFrame.module.css';

import images from './images';

import YText from '@/components/YText';
import YHeading from '@/components/YHeading';

import usePrefetch from '@/hooks/usePrefetch';

interface Review {
  image: string;
  name: string;
  text: string;
}

interface Article {
  icon: string;
  title: string;
  description: string;
}

interface ReviewsFrame {
  reviews: [Review, Review];
}

interface ArticlesFrame {
  articles: [Article, Article, Article, Article];
}

type Frames = [ReviewsFrame, ArticlesFrame, ArticlesFrame];

interface Props {
  frames: Frames;
  activeFrame: number;
}

const PersonalizationFrame: React.FC<Props> = ({ frames, activeFrame }) => {
  usePrefetch(Object.values(images[ScreenSize.LG]));

  const { reviews } = frames[0];
  const { articles } = [1, 2].includes(activeFrame)
    ? (frames[activeFrame] as Frames[1])
    : { articles: null };

  /**
   * Mobile covers
   */
  const mobileCover1 = (
    <>
      <div className="absolute top-0 right-0 w-70 h-86.6">
        <img
          className="object-contain"
          src={images[ScreenSize.MD].websitePane}
        />
      </div>
      <div
        className={[
          'absolute top-16 left-0 w-33 h-55 overflow-hidden',
          style.mobilePane,
        ].join(' ')}
      >
        <img
          className="object-contain"
          src={images[ScreenSize.MD].mobilePane}
        />
      </div>
      <div className="absolute left-3.5 -bottom-4">
        <Line1 />
      </div>
      <div className="absolute right-3.5 -bottom-22.5">
        <Line2 />
      </div>
    </>
  );

  const mobileCover2 = (
    <>
      <div className="absolute top-11.5 right-0 h-63 w-37.5">
        <img
          className="object-contain"
          src={images[ScreenSize.MD].frame2Blue}
        />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Frame2Transparent />
      </div>
      <div className="absolute top-0 left-0 w-40 h-65">
        <img
          className="object-contain"
          src={images[ScreenSize.MD].frame2White}
        />
      </div>
    </>
  );

  const mobileCover3 = (
    <>
      <div className="absolute top-0 w-61.6 h-77.5 left-1/2 transform -translate-x-1/2">
        <img
          className="object-contain"
          src={images[ScreenSize.MD].frame3White}
        />
      </div>
      <div
        className={[
          'absolute top-20 -right-7.5 w-42 h-53',
          style.frame3Shadow,
        ].join(' ')}
      >
        <img
          className="object-contain"
          src={images[ScreenSize.MD].frame3Green}
        />
      </div>
      <div
        className={[
          'absolute top-37.5 -left-5 w-42 h-53',
          style.frame3Shadow,
        ].join(' ')}
      >
        <img
          className="object-contain"
          src={images[ScreenSize.MD].frame3Blue}
        />
      </div>
    </>
  );

  const mobileCovers = [mobileCover1, mobileCover2, mobileCover3];

  /**
   * Mobile content for each frame
   */
  const reviewDefaultClasses = [
    'text-gray-400',
    'absolute',
    'transform',
    'translate-y-full',
    'w-65',
    'h-12',
    'overflow-hidden',
  ];

  const reviewAdditionalClasses = [
    'left-1 -bottom-6 md:left-20',
    'text-right right-1 -bottom-26 md:right-20',
  ];

  const mobileReviews = reviews.map(({ name, text }, index) => (
    <article key={`${name}-${index}`}>
      <YText
        fontSize={FontSize.XS}
        lineHeight={FontLineHeight.Relaxed}
        as="p"
        className={[
          ...reviewDefaultClasses,
          reviewAdditionalClasses[index],
        ].join(' ')}
      >
        {text}
      </YText>
    </article>
  ));

  const mobileArticles = (
    <div className="absolute w-full px-4 overflow-x-auto overflow-y-hidden -bottom-6.5 transform translate-y-full whitespace-nowrap align-middle no-scrollbar">
      {articles?.map(({ title, description }, index) => (
        <article
          key={`${title}-${index}`}
          className="h-34 w-60 p-5 inline-block whitespace-normal"
        >
          <YHeading
            fontWeight={FontWeight.SemiBold}
            fontSize={FontSize.XS}
            lineHeight={FontLineHeight.Relaxed}
            as="h3"
            className="text-white"
          >
            {title}
          </YHeading>
          <YText
            fontSize={FontSize.XS}
            className="text-gray-400"
            lineHeight={FontLineHeight.Relaxed}
            as="p"
          >
            {description}
          </YText>
        </article>
      ))}
    </div>
  );

  return (
    <div className="relative">
      <div className="relative max-w-sm mx-auto h-86.6">
        {mobileCovers[activeFrame]}
      </div>
      {activeFrame == 0 ? mobileReviews : mobileArticles}
    </div>
  );
};

export default PersonalizationFrame;
