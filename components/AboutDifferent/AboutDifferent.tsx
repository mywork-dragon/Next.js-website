import React from 'react';

import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';
import { ScreenSize } from '@/enums/screenSize';

import useBreakpoint from '@/hooks/useBreakpoint';

import YHeading from '@/components/YHeading';
import YText from '@/components/YText';

interface Article {
  title: string;
  subtitle: string;
  text: string;
}

interface Props {
  title: string;
  articles: Article[];
}

const AboutDifferent: React.FC<Props> = ({ title, articles }) => {
  const { screenSize } = useBreakpoint();

  return (
    <section className="container relative mb-15 md:mb-37.5 text-left">
      <YHeading
        {...titleProps[screenSize]}
        className="text-primary mt-5 mb-7 w-36 md:absolute md:top-0 md:left-0 md:w-56.1"
      >
        {title}
      </YHeading>
      <div className="grid grid-cols-1 gap-9 md:ml-80 md:grid-cols-2 md:gap-x-25 md:gap-y-16">
        {articles.map((article) => (
          <article className="w-full border-t border-blue-100 pt-6 md:pt-9">
            <YHeading
              className="text-gray-300 mb-4 md:text-gray-400 md:mb-6"
              {...articleTitleProps[screenSize]}
            >
              {article.title}
            </YHeading>
            <YHeading
              className="mb-2 md:mb-5"
              {...articleSubtitleProps[screenSize]}
            >
              {article.subtitle}
            </YHeading>
            <YText className="text-gray-300" {...articleTextProps[screenSize]}>
              {article.text}
            </YText>
          </article>
        ))}
      </div>
    </section>
  );
};

const titleProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.XL,
    lineHeight: FontLineHeight.Relaxed,
    fontWeight: FontWeight.SemiBold,
    as: 'h1',
  },
  [ScreenSize.MD]: {
    lineHeight: FontLineHeight.Loose,
    fontWeight: FontWeight.SemiBold,
    as: 'h1',
  },
} as Record<ScreenSize, Parameters<typeof YHeading>[0]>;

const articleTitleProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.MD,
    fontWeight: FontWeight.SemiBold,
    as: 'h2',
  },
  [ScreenSize.MD]: {
    fontSize: FontSize.LG,
    fontWeight: FontWeight.SemiBold,
    as: 'h2',
  },
} as Record<ScreenSize, Parameters<typeof YHeading>[0]>;

const articleSubtitleProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.LG,
    lineHeight: FontLineHeight.Relaxed,
    as: 'h3',
  },
  [ScreenSize.MD]: {
    fontSize: FontSize.XXL,
    lineHeight: FontLineHeight.Relaxed,
    as: 'h3',
  },
} as Record<ScreenSize, Parameters<typeof YHeading>[0]>;

const articleTextProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.SM,
    lineHeight: FontLineHeight.Loose,
    as: 'p',
  },
  [ScreenSize.MD]: {
    lineHeight: FontLineHeight.Loose,
    as: 'h3',
  },
} as Record<ScreenSize, Parameters<typeof YText>[0]>;

export default AboutDifferent;
