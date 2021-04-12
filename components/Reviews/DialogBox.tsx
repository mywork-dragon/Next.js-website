import React from 'react';

import { BreakPoint, ScreenSize } from '@/enums/screenSize';

import { useWindowWidth } from '@react-hook/window-size';

import DialogSM from '@/assets/other/reviews-dialog-sm.svg';
import DialogMD from '@/assets/other/reviews-dialog-md.svg';

const ReviewsDynamicSection = (): JSX.Element => {
  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0">
      {screenSize == ScreenSize.MD ? <DialogMD /> : <DialogSM />}
    </div>
  );
};

export default ReviewsDynamicSection;
