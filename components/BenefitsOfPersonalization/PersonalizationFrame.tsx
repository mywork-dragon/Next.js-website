import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { BreakPoint, ScreenSize } from '@/enums/screenSize';

import MobilePaneSM from '@/assets/benefits-of-personalization/mobile-panel-sm.svg';
import WebsitePaneSM from '@/assets/benefits-of-personalization/website-pane-sm.svg';
import Frame2White from '@/assets/benefits-of-personalization/frame-2-white.svg';
import Frame2Transparent from '@/assets/benefits-of-personalization/frame-2-transparent.svg';
import Frame2Blue from '@/assets/benefits-of-personalization/frame-2-blue.svg';
import Frame3Blue from '@/assets/benefits-of-personalization/frame-3-blue.svg';
import Frame3White from '@/assets/benefits-of-personalization/frame-3-white.svg';
import Frame3Green from '@/assets/benefits-of-personalization/frame-3-green.svg';

import MobilePaneMD from '@/assets/benefits-of-personalization/mobile-panel-md.svg';
import WebsitePaneMD from '@/assets/benefits-of-personalization/website-pane-md.svg';
import Frame2MD from '@/assets/benefits-of-personalization/frame-2-md.svg';
import Frame3MD from '@/assets/benefits-of-personalization/frame-3-md.svg';

import Line1 from '@/assets/other/benefits-line-1.svg';
import Line2 from '@/assets/other/benefits-line-2.svg';

import style from './PersonalizationFrame.module.css';
import YText from '../YText';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';
import YHeading from '../YHeading';

interface Review {
  image: string;
  name: string;
  text: string;
}

interface Article {
  icon: JSX.Element;
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
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  const { reviews } = frames[0];
  const { articles } = [1, 2].includes(activeFrame)
    ? (frames[activeFrame] as Frames[1])
    : { articles: null };

  /**
   * Mobile covers
   */
  const mobileCover1 = (
    <>
      <div className="absolute top-0 right-0">
        <WebsitePaneSM />
      </div>
      <div
        className={['absolute -top-1/4 -left-4 shadow', style.mobilePane].join(
          ' '
        )}
      >
        <MobilePaneSM />
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
      <div className="absolute top-11.5 right-0">
        <Frame2Blue />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Frame2Transparent />
      </div>
      <div className="absolute top-0 left-0">
        <Frame2White />
      </div>
    </>
  );

  const mobileCover3 = (
    <>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <Frame3White />
      </div>
      <div className="absolute top-11.5 -right-5">
        <Frame3Green />
      </div>
      <div className="absolute top-27 -left-5">
        <Frame3Blue />
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
    'w-70',
    'h-12',
    'overflow-hidden',
  ];

  const reviewAdditionalClasses = [
    'left-1 -bottom-6',
    'text-right  right-1 -bottom-26',
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
    <div className="w-120 h-70 absolute top-0 left-0">
      <div className="w-full h-full">
        <MobilePaneMD />
      </div>
      <div className="absolute -top-32.5 -right-5 transform translate-x-full">
        <WebsitePaneMD />
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

  const desktopFrame2 = (
    <div className="absolute top-5 left-0 w-130.5">
      <div
        className={[
          'absolute -top-60 transform translate-x-full',
          activeFrame == 1 ? '-right-18' : 'right-0',
        ].join(' ')}
      >
        {activeFrame == 1 ? <Frame2MD /> : <Frame3MD />}
      </div>
      <div className="grid grid-cols-2 gap-10">
        {articles?.map((article) => (
          <article>
            <div className="w-8 h-8 mb-5 fill-current text-white opacity-50">
              {article.icon}
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

  return screenSize == ScreenSize.SM ? (
    <div className="relative w-full h-86.6">
      {mobileCovers[activeFrame]}
      {activeFrame == 0 ? mobileReviews : mobileArticles}
    </div>
  ) : (
    <div className="relative">{desktopFrames[activeFrame]}</div>
  );
};

export default PersonalizationFrame;
