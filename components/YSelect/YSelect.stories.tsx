import { useState } from 'react';
import { MotionConfig, AnimationFeature, ExitFeature } from 'framer-motion';

import { Language } from '@/enums/language';

import YSelect from './YSelect';

export default {
  title: 'Language Select',
  component: YSelect,
};

export const Default = (): JSX.Element => {
  const [current, setCurrent] = useState(Language.UK);

  return (
    <div className="h-10 w-auto relative">
      <MotionConfig features={[AnimationFeature, ExitFeature]}>
        <YSelect
          current={current}
          onChange={(lang) => setCurrent(lang)}
          className="top-1/2 transform -translate-y-1/2"
        />
      </MotionConfig>
    </div>
  );
};
