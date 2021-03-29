import React, { useEffect, useState } from 'react';
import {
  m as motion,
  MotionConfig,
  AnimationFeature,
  ExitFeature,
  AnimatePresence,
} from 'framer-motion';

import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

/**@TODO dynamic import */
import YButtonGroup, {
  ButtonGroup,
} from '@/components/YButtonGroup/YButtonGroup';
import Frame, { Frames } from './PersonalizationFrame';

import YHeading from '@/components/YHeading';
import YText from '@/components/YText';

import Wave from '@/assets/other/wave-md.svg';

import waveAnimation from './waveAnimations.module.css';

interface Props {
  buttons: ButtonGroup;
  title: string;
  description: string;
  frames: Frames;
}

const BenefitsOfPersonalization: React.FC<Props> = ({
  title,
  description,
  buttons,
  frames,
}) => {
  const [activeFrame, setActiveFrame] = useState(0);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  const handleFrameChange = (index: number) => setActiveFrame(index);

  const motionProps = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    key: activeFrame,
  };

  return (
    <MotionConfig features={[AnimationFeature, ExitFeature]}>
      <section className="relative w-full overflow-hidden border-b border-soft">
        <div
          className={['absolute bottom-0 w-full', waveAnimation.wave].join(' ')}
        >
          <Wave />
        </div>
        <div className="container pt-10 pb-70 md:pt-30 md:px-0 md:h-250">
          <div className="w-full text-center md:text-left z-10">
            <YHeading
              fontSize={FontSize.XL}
              fontWeight={FontWeight.ExtraBold}
              className="relative mb-3 md:text-3xl md:font-bold md:leading-18 md:w-82.5"
              as="h1"
            >
              {title}
            </YHeading>
            <YText
              fontSize={FontSize.SM}
              lineHeight={FontLineHeight.Relaxed}
              className="relative  text-gray-300 mb-10 md:text-base md:leading-11 md:w-138.6"
              as="p"
            >
              {description}
            </YText>
            <YButtonGroup
              onChange={handleFrameChange}
              className="z-10 mb-7.5 md:transform md:-translate-x-1/2 md:left-1/2 md:absolute md:bottom-35"
              buttons={buttons}
            />
          </div>
          <AnimatePresence exitBeforeEnter>
            <motion.div {...motionProps}>
              <Frame frames={frames} activeFrame={activeFrame} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </MotionConfig>
  );
};

export default BenefitsOfPersonalization;
