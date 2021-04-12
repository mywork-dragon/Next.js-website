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
import Wave from './Wave';
import Frame, { Frames } from './PersonalizationFrame';

import YHeading from '@/components/YHeading';
import YText from '@/components/YText';

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
    initial: firstRender ? false : { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { duration: 0.2 },
    key: activeFrame,
  };

  return (
    <MotionConfig features={[AnimationFeature, ExitFeature]}>
      <section className="relative w-full overflow-hidden md:border-b border-soft">
        <Wave />
        <div className="container pt-10 pb-70 lg:pt-30 lg:px-0 sm:h-250">
          <div className="w-full text-center lg:px-0 lg:text-left z-10">
            <YHeading
              fontSize={FontSize.XL}
              fontWeight={FontWeight.ExtraBold}
              className="relative mb-3 md:text-3xl md:font-bold md:leading-18 md:w-82.5 md:mx-auto lg:mx-0"
              as="h1"
            >
              {title}
            </YHeading>
            <YText
              fontSize={FontSize.SM}
              lineHeight={FontLineHeight.Relaxed}
              className="relative  text-gray-300 mb-10 md:text-base md:leading-11 md:w-138.6 md:mx-auto lg:mx-0"
              as="p"
            >
              {description}
            </YText>
            <YButtonGroup
              onChange={handleFrameChange}
              className="z-10 mb-7.5 lg:transform lg:-translate-x-1/2 lg:left-1/2 lg:absolute lg:bottom-35"
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
