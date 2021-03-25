import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { ButtonSize } from '@/enums/components';
import { FontLineHeight, FontSize } from '@/enums/font';
import { BreakPoint, ScreenSize } from '@/enums/screenSize';

import YButton from '@/components/YButton';
import YHeading from '@/components/YHeading';
import YLink from '@/components/YLink';
import YText from '@/components/YText';
import Cloud from './Cloud';

interface ButtonProps {
  text: string;
  link: string;
}

interface Props {
  title: string;
  description: string;
  buttonProps: ButtonProps;
}

const AboutContact: React.FC<Props> = ({
  title,
  description,
  buttonProps: { link, text: buttonText },
}) => {
  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  const content = (
    <div className="w-full text-center pt-111.1 pb-15 md:text-left md:pt-60 md:w-100 md:pb-75 text-white">
      <YHeading className="pb-3 w-full" {...titleProps[screenSize]}>
        {title}
      </YHeading>
      <YText
        className="pb-5 w-full text-gray-300 md:text-gray-200"
        {...descriptionProps[screenSize]}
      >
        {description}
      </YText>
      <YButton
        shadow
        buttonSize={screenSize == ScreenSize.SM ? ButtonSize.MD : ButtonSize.LG}
      >
        {buttonText}
      </YButton>
    </div>
  );

  return (
    <section className="w-full overflow-hidden">
      <div className="container border border-transparent relative md:p-0">
        <Cloud />
        {content}
      </div>
    </section>
  );
};

const titleProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.XL,
    lineHeight: FontLineHeight.Relaxed,
    as: 'h1',
  },
  [ScreenSize.MD]: {
    fontSize: FontSize.XXL,
    lineHeight: FontLineHeight.Relaxed,
    as: 'h1',
  },
} as Record<string, Parameters<typeof YHeading>[0]>;

const descriptionProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.SM,
    lineHeight: FontLineHeight.Loose,
    as: 'p',
  },
  [ScreenSize.MD]: {
    lineHeight: FontLineHeight.Loose,
    as: 'p',
  },
} as Record<ScreenSize, Parameters<typeof YText>[0]>;

export default AboutContact;
