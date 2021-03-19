import React, { useEffect, useState } from 'react';
import {
  MotionConfig,
  AnimationFeature,
  ExitFeature,
  AnimatePresence,
  AnimateLayoutFeature,
  DragFeature,
  MotionProps,
} from 'framer-motion';
import { useWindowWidth } from '@react-hook/window-size';

import { BreakPoint, ScreenSize } from '@/enums/screenSize';

import rotate from '@/libs/utils/rotate';

import YServiceCard, { Service } from '@/components/YServiceCard/YServiceCard';

interface Props {
  services: Service[];
  reverse?: boolean;
  className?: string;
  active: string | null;
}

const CardDeck: React.FC<Props> = ({ services, className, active }) => {
  const [deck, setDeck] = useState(services);
  const [firstRender, setFirstRender] = useState(true);

  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  // controls card being selected outside the component i.e. from buttons
  useEffect(() => {
    if (active != null) {
      // get active service card
      const activeCard = deck.find((card) => card.title == active);

      // remove the card from the array
      const filteredDeck = deck.filter((card) => card.title != active);

      setDeck([activeCard, ...filteredDeck]);
    }
  }, [active]);

  // resets the deck array when switching screen size
  useEffect(() => {
    setDeck(services);
  }, [screenSize]);

  // utilize drag and drop control
  const handleDragEnd: MotionProps['onDragEnd'] = (_, info) => {
    const offsetX = info.offset.x;
    if (offsetX > 100) {
      setDeck(rotate(deck));
    } else if (offsetX < -100) {
      setDeck(rotate(deck, true));
    }
  };

  const dragProps = {
    drag: true,
    onDragEnd: handleDragEnd,
    dragConstraints: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  };

  // prevent mount animation on first render
  useEffect(() => {
    setFirstRender(false);
  }, []);

  // gets motion props
  const getMotionProps = (index: number, screenSize: ScreenSize) => ({
    initial: firstRender
      ? false
      : {
          ...motionProps[screenSize].initial,
          backgroundColor: index == 0 ? colors[0] : colors[index - 1],
        },
    animate: {
      ...motionProps[screenSize].animate,
      backgroundColor: colors[index],
    },
    exit: { ...motionProps[screenSize].exit },
    ...(screenSize == ScreenSize.SM ? dragProps : {}),
  });

  const cardsToShow = deck.slice(0, 3);

  return (
    <MotionConfig
      features={[
        AnimationFeature,
        ExitFeature,
        AnimateLayoutFeature,
        DragFeature,
      ]}
    >
      <div className={className}>
        <AnimatePresence>
          {cardsToShow.map((card, index) => (
            <YServiceCard
              {...getMotionProps(index, screenSize)}
              className={[...baseClasses, cardClasses[index]].join(' ')}
              key={`${card.title}-${screenSize}`}
              {...card}
            />
          ))}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};

/** options, utils and classNames */
const baseClasses = ['absolute', 'rounded'];

const cardClasses = [
  'left-0 top-10 bottom-0 right-0 z-20 md:top-0 md:right-26',
  'left-5 top-5 bottom-5 right-5 z-10 md:left-12 md:top-5 md:bottom-5 md:right-16',
  'left-10 top-0 bottom-10 right-10 md:left-20 md:top-10 md:bottom-10 md:right-8',
];

// colors for each card -> used for crossfade animation
const colors = ['#305eed', '#103d67', '#062d45'];

const motionProps = {
  [ScreenSize.SM]: {
    initial: { y: 30, x: -30, opacity: 0 },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      y: -20,
      scale: 0.8,
      opacity: 0,
    },
  },
  [ScreenSize.MD]: {
    initial: { x: -60, scale: 1.1, opacity: 0 },
    animate: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.1 },
    },
    exit: { x: 40, scale: 0.8, opacity: 0 },
    transition: { type: 'tween', ease: 'easeIn' },
  },
};

export default CardDeck;
