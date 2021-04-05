import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { BreakPoint, ScreenSize } from '@/enums/screenSize';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import Frame2Transparent from '@/assets/benefits-of-personalization/frame-2-transparent.svg';

import Frame2MD from '@/assets/benefits-of-personalization/frame-2-md.svg';
import Frame3MD from '@/assets/benefits-of-personalization/frame-3-md.svg';

import Line1 from '@/assets/other/benefits-line-1.svg';
import Line2 from '@/assets/other/benefits-line-2.svg';

import style from './PersonalizationFrame.module.css';

import YText from '@/components/YText';
import YHeading from '@/components/YHeading';

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

export type Frames = [
  {
    reviews: [Review, Review];
  },
  {
    articles: [Article, Article, Article, Article];
  }
];

interface Props {
  frames: Frames;
  activeFrame: number;
}

const PersonalizationFrame: React.FC<Props> = ({ frames, activeFrame }) => {
  const screenSize =
    useWindowWidth() < BreakPoint.LG ? ScreenSize.MD : ScreenSize.LG;

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
          src="https://yeaimages.s3.eu-central-1.amazonaws.com/website-pane-sm.png"
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
          src="https://yeaimages.s3.eu-central-1.amazonaws.com/mobile-panel-sm.png"
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
          src="https://yeaimages.s3.eu-central-1.amazonaws.com/frame-2-blue.png"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Frame2Transparent />
      </div>
      <div className="absolute top-0 left-0 w-40 h-65">
        <img
          className="object-contain"
          src="https://yeaimages.s3.eu-central-1.amazonaws.com/frame-2-white.png"
        />
      </div>
    </>
  );

  const mobileCover3 = (
    <>
      <div className="absolute top-0 w-61.6 h-77.5 left-1/2 transform -translate-x-1/2">
        <img
          className="object-contain"
          src="https://yeaimages.s3.eu-central-1.amazonaws.com/frame-3-white.png"
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
          src="https://yeaimages.s3.eu-central-1.amazonaws.com/frame-3-green.png"
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
          src="https://yeaimages.s3.eu-central-1.amazonaws.com/frame-3-blue.png"
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

  const mobileReviews = reviews.map((review, index) => (
    <article key={`review-${index}`}>
      <YText
        fontSize={FontSize.XS}
        lineHeight={FontLineHeight.Relaxed}
        as="p"
        className={[
          ...reviewDefaultClasses,
          reviewAdditionalClasses[index],
        ].join(' ')}
      >
        {review.text}
      </YText>
    </article>
  ));

  const mobileArticles = (
    <div className="absolute w-full px-4 overflow-x-auto overflow-y-hidden -bottom-6.5 transform translate-y-full whitespace-nowrap align-middle no-scrollbar">
      {articles?.map(({ title, description }) => (
        <article
          key={title}
          className="h-34 w-60 p-5 inline-block whitespace-normal"
        >
          <YHeading
            fontWeight={FontWeight.SemiBold}
            fontSize={FontSize.XS}
            lineHeight={FontLineHeight.Relaxed}
            as="h3"
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

  /**
   * Desktop content
   */
  const desktopReviewsAdditionalClasses = [
    'left-3.5',
    '-right-11.5 translate-x-full',
  ];

  const desktopFrame1 = (
    <div className="w-124.1 h-70 absolute top-0 left-0">
      <div className="w-full h-full">
        <img
          className="object-contain"
          src="https://yeaimages.s3.eu-central-1.amazonaws.com/mobile-panel-md.png"
        />
      </div>
      <div className="absolute -top-32.5 -right-5 transform translate-x-full w-195 h-115">
        <img
          className="object-contain"
          src="https://yeaimages.s3.eu-central-1.amazonaws.com/website-pane-md.png"
        />
      </div>
      {reviews.map((review, index) => (
        <article
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
            <img src={review.image} className="w-full h-full" />
          </div>
          <YHeading
            fontSize={FontSize.SM}
            lineHeight={FontLineHeight.Relaxed}
            fontWeight={FontWeight.SemiBold}
            as="h3"
            className="ml-0.5 mb-2"
          >
            {review.name}
          </YHeading>
          <YText
            fontSize={FontSize.XS}
            lineHeight={FontLineHeight.Relaxed}
            className="text-white opacity-50 w-61.6"
            as="p"
          >
            {review.text}
          </YText>
        </article>
      ))}
    </div>
  );

  const frame2Cover = (
    <div className="relative w-143.6 h-164.5">
      <div className="absolute top-0 w-full transform scale-105 z-10">
        <img
          src="https://yeaimages.s3.eu-central-1.amazonaws.com/frame-2-white-md.png"
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
      {/* <Frame3MD /> */}
      <img
        src="https://yeaimages.s3.eu-central-1.amazonaws.com/frame-3-md.png"
        className="object-contain"
      />
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
        {articles?.map((article) => (
          <article>
            <div className="w-8 h-8 mb-5 fill-current text-white opacity-50">
              {require(`@/assets/icons/${article.icon}`).default()}
            </div>
            <YHeading
              fontSize={FontSize.SM}
              fontWeight={FontWeight.SemiBold}
              as="h3"
            >
              {article.title}
            </YHeading>
            <YText
              fontSize={FontSize.XS}
              lineHeight={FontLineHeight.Relaxed}
              className="text-white opacity-50"
              as="p"
            >
              {article.description}
            </YText>
          </article>
        ))}
      </div>
    </div>
  );

  const desktopFrames = [desktopFrame1, desktopFrame2, desktopFrame2];

  return screenSize == ScreenSize.MD ? (
    <div className="relative">
      <div className="relative max-w-sm mx-auto h-86.6">
        {mobileCovers[activeFrame]}
      </div>
      {activeFrame == 0 ? mobileReviews : mobileArticles}
    </div>
  ) : (
    <div className="relative">{desktopFrames[activeFrame]}</div>
  );
};

export default PersonalizationFrame;
