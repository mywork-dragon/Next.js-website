import { useWindowWidth } from '@react-hook/window-size';
import React from 'react';

import { BreakPoint, ScreenSize } from '@/enums/screenSize';
import { FourPoints } from '@/enums/components';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import YHeading from '@/components/YHeading';
import YText from '@/components/YText';

interface Article {
  heading?: string;
  text: string;
  stats?: string;
}

interface Props {
  title: string;
  subtitle: string;
  description: string;
  points: [Article, Article, Article, Article];
  cover: JSX.Element;
  type?: FourPoints;
}

const ServiceFourPoints: React.FC<Props> = ({
  title,
  subtitle,
  description,
  points,
  cover,
  type = FourPoints.OrderedList,
}) => {
  const screenSize =
    useWindowWidth() < BreakPoint.SM ? ScreenSize.SM : ScreenSize.MD;

  const pointsSection =
    type == FourPoints.OrderedList ? (
      <ol className="whitespace-nowrap overflow-y-hidden overflow-x-auto no-scrollbar text-left list-none mt-8 md:grid md:grid-cols-2 md:gap-6">
        {points.map((article, index) => (
          <li
            key={article.text}
            className={[
              index == 0 ? '' : 'ml-6',
              'w-60 h-42 p-4 border border-blue-100 rounded-xl inline-block whitespace-normal align-text-top md:block md:m-0',
            ].join(' ')}
          >
            <YHeading className="text-shadow-blue" {...indexProps}>
              {index}
            </YHeading>
            <YHeading
              {...orderedArticleProps}
              as="h4"
              fontWeight={FontWeight.SemiBold}
            >
              {article.heading}
            </YHeading>
            <YText className="text-gray-400" {...orderedArticleProps} as="p">
              {article.text}
            </YText>
          </li>
        ))}
      </ol>
    ) : (
      <div className="whitespace-nowrap overflow-y-hidden overflow-x-auto no-scrollbar text-left list-none mt-8 md:relative md:left-1/2 md:transform md:-translate-x-1/2">
        {points.map((article, index) => (
          <article
            key={article.text}
            className={[
              index == 0 ? '' : 'ml-6 md:ml-8',
              'w-65 h-52 p-7 bg-blue-100 bg-opacity-10 rounded-xl inline-block whitespace-normal align-text-top',
            ].join(' ')}
          >
            <YHeading {...statsProps}>{article.stats}</YHeading>
            <YText {...statsTextProps} className="text-gray-300">
              {article.text}
            </YText>
          </article>
        ))}
      </div>
    );

  return (
    <section className={sectionClasses.join(' ')}>
      <div
        className={[
          containerClasses,
          type == FourPoints.OrderedList
            ? 'py-10 md:py-20'
            : 'pt-5 pb-10 md:pt-25 md:pb-30',
        ].join(' ')}
      >
        <div className={getInnerContainerClasses(type)}>
          <div className={getImageClasses(type)}>{cover}</div>
          <div className={getTextBoxClasses(type)}>
            <YHeading {...titleProps} className={titleClasses.join(' ')}>
              {title}
            </YHeading>
            <YHeading {...subtitleProps[screenSize]}>{subtitle}</YHeading>
            <YText
              {...descriptionProps[screenSize]}
              className="text-gray-400 mt-2 md:mt-4 md:w-125 md:mx-auto"
            >
              {description}
            </YText>
            {type == FourPoints.OrderedList && pointsSection}
          </div>
        </div>
        {type == FourPoints.Stats && pointsSection}
      </div>
    </section>
  );
};
/**
 * Base classNames for each region
 */
const sectionClasses = ['w-full', 'overflow-hidden', 'border-soft', 'border-b'];

const containerClasses = ['container', 'md:px-0', 'border'];

const titleClasses = ['hidden', 'md:block', 'text-gray-400', 'mb-3'];

// inner container / image container
const getInnerContainerClasses = (type: FourPoints) =>
  ['relative', ...innerContainerClasses[type]].join(' ');

const innerContainerClasses = {
  [FourPoints.OrderedList]: ['md:ml-142.5'],
  [FourPoints.Stats]: ['md:ml-115'],
};

// text box
const getTextBoxClasses = (type: FourPoints) =>
  [
    'text-center mt-7.5 md:mt-0 md:text-left md:absolute md:top-1/2 md:transform md:-translate-y-1/2',
    ...textBoxClasses[type],
  ].join(' ');

const textBoxClasses = {
  [FourPoints.OrderedList]: ['md:-left-142.5', 'w-103'],
  [FourPoints.Stats]: ['md:-left-115', 'md:w-96.1'],
};

// cover image
const getImageClasses = (type: FourPoints) =>
  [
    'relative left-1/2 transform -translate-x-1/2 md:transform-none md:static',
    ...imageClasses[type],
  ].join(' ');

const imageClasses = {
  [FourPoints.OrderedList]: ['w-100 h-70 md:w-237 md:h-173.6'],
  [FourPoints.Stats]: ['w-126.5 h-90 mb-1 md:w-162 md:h-119 md:mb-15'],
};

/**
 * Text props for each region
 */
const titleProps = {
  fontSize: FontSize.LG,
  lineHeight: FontLineHeight.Relaxed,
  fontWeight: FontWeight.SemiBold,
  as: 'h1',
} as Parameters<typeof YHeading>[0];

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

// Ordered articles
const indexProps = {
  fontSize: FontSize.XL,
  as: 'h3',
} as Parameters<typeof YHeading>[0];

const orderedArticleProps = {
  fontSize: FontSize.XS,
  lineHeight: FontLineHeight.Relaxed,
} as Parameters<typeof YText>[0];

// Stats articles
const statsProps = {
  fontSize: FontSize.XXL,
  fontWeight: FontWeight.SemiBold,
  as: 'h3',
} as Parameters<typeof YHeading>[0];

const statsTextProps = {
  fontSize: FontSize.SM,
  lineHeight: FontLineHeight.Relaxed,
  as: 'p',
} as Parameters<typeof YText>[0];

export default ServiceFourPoints;
