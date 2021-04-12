import React, { useMemo } from 'react';
import {
  AnimateLayoutFeature,
  AnimationFeature,
  ExitFeature,
  MotionConfig,
} from 'framer-motion';

import { NavItemInterface } from '@/components/YHeaderItem/YHeaderItem';

import useBreakpoint from '@/hooks/useBreakpoint';

import { ScreenSize } from '@/enums/screenSize';
import { Language } from '@/enums/language';
import dynamic from 'next/dynamic';

interface Logo {
  icon: string;
  link: string;
}

interface Button {
  text: string;
  link: string;
}

interface Props {
  logo: Logo;
  navItems: NavItemInterface[];
  button: Button;
  onLangChange?: (lang: Language) => any;
  showMoreLabel?: string;
}

const Header: React.FC<Props> = (props) => {
  const { screenSize, screenReady } = useBreakpoint([ScreenSize.LG]);

  const Content = useMemo(
    () =>
      dynamic(
        () =>
          screenSize == ScreenSize.LG
            ? import('./HeaderLG')
            : import('./HeaderSM'),
        { ssr: false }
      ),
    [screenSize]
  );

  return (
    <MotionConfig
      features={[AnimationFeature, ExitFeature, AnimateLayoutFeature]}
    >
      {screenReady && <Content {...props} />}
    </MotionConfig>
  );
};

export default Header;
