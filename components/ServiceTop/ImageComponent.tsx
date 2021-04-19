import React from 'react';

import { Service } from '@/enums/components';

import useBreakpoint from '@/hooks/useBreakpoint';

import heroImages from './heroImages';
import { ScreenSize } from '@/enums/screenSize';

interface Props {
  service: Service;
}

const ImageComponent: React.FC<Props> = ({ service }) => {
  const { screenSize } = useBreakpoint([ScreenSize.LG]);

  const hero = heroImages[service];
  const adaptedScreenSize =
    screenSize == ScreenSize.LG ? ScreenSize.LG : ScreenSize.SM;

  return hero[adaptedScreenSize];
};

export default ImageComponent;
