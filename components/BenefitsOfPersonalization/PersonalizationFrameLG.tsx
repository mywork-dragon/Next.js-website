import React from 'react';
import dynamic from 'next/dynamic';

import { ScreenSize } from '@/enums/screenSize';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import Frame2MD from '@/assets/benefits-of-personalization/frame-2-md.svg';

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

export interface ReviewsFrame {
  reviews: [Review, Review];
}

export interface ArticlesFrame {
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
   * Desktop content
   */
  const desktopReviewsAdditionalClasses = [
    'left-3.5',
    '-right-11.5 translate-x-full',
  ];

  const desktopFrame1 = (
    <div className="w-124.1 h-70 absolute top-0 left-0 z-10">
      <div className="w-full h-full">
        <img
          className="object-contain"
          src={images[ScreenSize.LG].mobilePane}
        />
      </div>
      <div className="absolute -top-32.5 -right-5 transform translate-x-full w-195 h-115">
        <img
          className="object-contain"
          src={images[ScreenSize.LG].websitePane}
        />
      </div>
      {reviews.map(({ image, name, text }, index) => (
        <article
          key={`${name}-${index}`}
          className={[
            'absolute bottom-25 transform translate-y-full',
            desktopReviewsAdditionalClasses[index],
          ].join(' ')}
        >
          <div
            className={[
              'w-15 h-15 rounded-full border-4 overflow-hidden mb-3',
              index == 0 ? 'border-blue-100' : 'border-primary',
            ].join(' ')}
          >
            <img src={image} className="w-full h-full" />
          </div>
          <YHeading
            fontSize={FontSize.SM}
            lineHeight={FontLineHeight.Relaxed}
            fontWeight={FontWeight.SemiBold}
            as="h3"
            className="text-white ml-0.5 mb-2"
          >
            {name}
          </YHeading>
          <YText
            fontSize={FontSize.XS}
            lineHeight={FontLineHeight.Relaxed}
            className="text-white opacity-50 w-61.6"
            as="p"
          >
            {text}
          </YText>
        </article>
      ))}
    </div>
  );

  const frame2Cover = (
    <div className="relative w-143.6 h-164.5">
      <div className="absolute top-0 w-full transform scale-105 z-10">
        <img
          src={images[ScreenSize.LG].frame2White}
          className="object-contain"
        />
      </div>
      <div className="absolute w-full bottom-0">
        <Frame2MD />
      </div>
    </div>
  );

  const frame3Cover = (
    <div className="w-lg">
      <img src={images[ScreenSize.LG].frame3} className="object-contain" />
    </div>
  );

  const desktopFrame2 = (
    <div className="absolute top-5 left-0 w-130.5">
      <div
        className={[
          'absolute -top-60 transform translate-x-full',
          activeFrame == 1 ? '-right-18' : 'right-0',
        ].join(' ')}
      >
        {activeFrame == 1 ? frame2Cover : frame3Cover}
      </div>
      <div className="grid grid-cols-2 gap-10">
        {articles?.map(({ icon, title, description }, index) => {
          const Icon = dynamic(() => import(`@/assets/icons/${icon}.svg`), {
            ssr: false,
          });

          return (
            <article key={`${title}-${index}`}>
              <div className="w-8 h-8 mb-5 fill-current text-white opacity-50">
                <Icon />
              </div>
              <YHeading
                fontSize={FontSize.SM}
                fontWeight={FontWeight.SemiBold}
                as="h3"
                className="text-white"
              >
                {title}
              </YHeading>
              <YText
                fontSize={FontSize.XS}
                lineHeight={FontLineHeight.Relaxed}
                className="text-white opacity-50"
                as="p"
              >
                {description}
              </YText>
            </article>
          );
        })}
      </div>
    </div>
  );

  const desktopFrames = [desktopFrame1, desktopFrame2, desktopFrame2];

  return <div className="relative">{desktopFrames[activeFrame]}</div>;
};

export default PersonalizationFrame;
