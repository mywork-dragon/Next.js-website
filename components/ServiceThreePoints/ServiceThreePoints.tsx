import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { ThreePoints } from '@/enums/components';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';
import { BreakPoint, ScreenSize } from '@/enums/screenSize';

import YHeading from '@/components/YHeading';
import YText from '@/components/YText';

interface Article {
  heading: string;
  text: string;
  image: JSX.Element;
}

interface ListItem {
  text: string;
}

interface Props {
  title: string;
  subtitle: string;
}

export interface ArticlesProps extends Props {
  points: [Article, Article, Article];
  type: ThreePoints.Articles;
}

export interface OrderedProps extends Props {
  points: [ListItem, ListItem, ListItem];
  type: ThreePoints.OrderedList;
  description: string;
  cover: JSX.Element;
}

const ServiceThreePoints: React.FC<ArticlesProps | OrderedProps> = ({
  title,
  subtitle,
  type,
  ...props
}) => {
  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  if (type == ThreePoints.Articles) {
    /**
     * Type: Articles
     */
    const { points } = props as ArticlesProps;

    return (
      <section className={sectionClasses.join(' ')}>
        <div className={containerClasses.join(' ')}>
          <YHeading {...titleProps[type]} className={titleClasses.join(' ')}>
            {title}
          </YHeading>
          <YHeading {...subtitleProps[screenSize]}>{subtitle}</YHeading>
          <div className="grid grid-cols-1 mt-10 mb-25 gap-10 md:grid-cols-3 md:gap-42.5">
            {points.map((article) => (
              <article
                key={article.text}
                className="w-full relative px-1 md:px-0"
              >
                <div className="relative left-1/2 transform -translate-x-1/2 w-67.5 h-47.5 mb-8 md:w-80 md:h-60 md:mb-10">
                  {article.image}
                </div>
                <YHeading className="md:w-3/4 md:mx-auto" {...pointsProps}>
                  {article.heading}
                </YHeading>
                <YText className="text-gray-400 mt-2" {...articleTextProps}>
                  {article.text}
                </YText>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    /**
     * Type: Ordered List
     */
    const { description, cover, points } = props as OrderedProps;

    return (
      <section className={sectionClasses.join(' ')}>
        <div className={containerClasses.join(' ')}>
          <div className="relative left-1/2 transform -translate-x-1/2 w-103 h-72.5 mb-7.5 md:w-153 md:h-112.5 md:mb-15">
            {cover}
          </div>
          <YHeading {...titleProps[type]} className={titleClasses.join(' ')}>
            {title}
          </YHeading>
          <YHeading {...subtitleProps[screenSize]}>{subtitle}</YHeading>
          <YText
            {...descriptionProps[screenSize]}
            className="text-gray-400 mt-2 md:mt-4 md:w-125 md:mx-auto"
          >
            {description}
          </YText>
          <ol className="whitespace-nowrap overflow-y-hidden overflow-x-auto no-scrollbar list-none my-8 mb-16 md:mb-25 md:mt-15">
            {points.map((article, index) => (
              <li
                key={article.text}
                className={[
                  index == 0 ? '' : 'ml-6 md:ml-8',
                  'w-70 h-47 p-7 border border-blue-100 rounded-xl inline-block text-left align-text-top',
                ].join(' ')}
              >
                <YHeading className="text-shadow-blue" {...indexProps}>
                  {index}
                </YHeading>
                <YHeading className="whitespace-normal mt-2" {...pointsProps}>
                  {article.text}
                </YHeading>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }
};

/**
 * Base classNames for each region
 */
const sectionClasses = ['w-full', 'overflow-hidden', 'border-soft', 'border-b'];

const containerClasses = ['container', 'pt-10', 'md:py-30', 'text-center'];

const titleClasses = ['hidden', 'md:block', 'text-gray-400', 'mb-3'];

/**
 * Text props for each region
 */
const titleProps = {
  [ThreePoints.Articles]: {
    fontSize: FontSize.LG,
    fontWeight: FontWeight.SemiBold,
    as: 'h1',
  },
  [ThreePoints.OrderedList]: {
    fontSize: FontSize.LG,
    lineHeight: FontLineHeight.Relaxed,
    fontWeight: FontWeight.SemiBold,
    as: 'h1',
  },
} as Record<ThreePoints, Parameters<typeof YHeading>[0]>;

const subtitleProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.LG,
    lineHeight: FontLineHeight.Relaxed,
    as: 'h2',
  },
  [ScreenSize.MD]: {
    fontSize: FontSize.XXL,
    as: 'h2',
  },
} as Record<ScreenSize, Parameters<typeof YHeading>[0]>;

const descriptionProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.SM,
    lineHeight: FontLineHeight.Relaxed,
    as: 'p',
  },
  [ScreenSize.MD]: {
    lineHeight: FontLineHeight.Relaxed,
    as: 'p',
  },
} as Record<ScreenSize, Parameters<typeof YText>[0]>;

const pointsProps = {
  fontSize: FontSize.LG,
  as: 'h3',
} as Parameters<typeof YHeading>[0];

const articleTextProps = {
  fontSize: FontSize.SM,
  lineHeight: FontLineHeight.Relaxed,
  as: 'p',
} as Parameters<typeof YText>[0];

const indexProps = {
  fontSize: FontSize.XXL,
  fontWeight: FontWeight.SemiBold,
  as: 'h3',
} as Parameters<typeof YHeading>[0];

export default ServiceThreePoints;
