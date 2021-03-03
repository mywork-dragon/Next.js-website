import { useState } from 'react';

import Header from './Header';
import Toggle from './MenuToggle';
import { ToggleType } from '@/enums/components';

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

export const ToggleVariants = (): JSX.Element => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const classNames = 'absolute top-1/2 transform -translate-y-1/2';

  return (
    <div className="relative w-16 h-6">
      <Toggle
        className={[classNames, 'left-0'].join(' ')}
        open={open1}
        onClick={() => setOpen1(!open1)}
      />
      <Toggle
        className={[classNames, 'right-0'].join(' ')}
        type={ToggleType.Plus}
        open={open2}
        onClick={() => setOpen2(!open2)}
      />
    </div>
  );
};
