import { useState } from 'react';

import Header from './Header';
import { Toggle, Arrow } from './MenuButtons';
import { ArrowType, ToggleType } from '@/enums/components';

import { props } from './StoriesData';

export default {
  title: 'Header',
  component: Header,
};

export const Default = (): JSX.Element => (
  <div className="absolute top-0 right-0 left-0">
    <Header {...props} />
  </div>
);

export const WithIcons = (): JSX.Element => (
  <div className="absolute top-0 right-0 left-0">
    <Header showIcons {...props} />
  </div>
);

export const MenuButons = (): JSX.Element => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div className="relative flex items-center h-6">
      <Toggle open={open1} className="mr-5" onClick={() => setOpen1(!open1)} />
      <Toggle
        className="mr-5"
        type={ToggleType.Plus}
        open={open2}
        onClick={() => setOpen2(!open2)}
      />
      <Arrow className="mr-5" />
      <Arrow type={ArrowType.Left} className="mr-5" />
    </div>
  );
};
