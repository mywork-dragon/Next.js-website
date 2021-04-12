import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  m as motion,
  AnimationFeature,
  MotionConfig,
  AnimatePresence,
  ExitFeature,
  AnimateSharedLayout,
  AnimateLayoutFeature,
} from 'framer-motion';

import filterPosition from '@/libs/utils/filterPosition';

import useBreakpoint from '@/hooks/useBreakpoint';

import { ScreenSize } from '@/enums/screenSize';
import { FontSize, FontWeight } from '@/enums/font';

import YToggleRound from '@/components/YToggleRound';
import YText from '@/components/YText';
import YHeading from '@/components/YHeading';

export interface TeamMember {
  name: string;
  role: string;
  text: string;
  image: string;
}

enum Segment {
  Image = 'image',
  Name = 'name',
  Role = 'role',
  Text = 'text',
}

const YTeamCard: React.FC<TeamMember & { className: string }> = ({
  name,
  role,
  text,
  image,
  className,
}) => {
  const [open, setOpen] = useState(false);

  // control mount animation of image
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    setFirstRender(false);
  }, []);

  const { screenSize } = useBreakpoint();

  const imageElement = (screenSize == ScreenSize.MD || !open) && (
    <motion.div
      key={Segment.Image}
      layout
      {...getImageFadeProps(firstRender)}
      className={[
        'absolute rounded-full overflow-hidden',
        open
          ? 'top-5 left-5 w-20 h-20'
          : 'h-50 w-50 left-6.5 top-13.6 sm:w-55 sm:h-55 sm:left-13.6 md:top-13.6 md:left-16.1',
      ].join(' ')}
    >
      Test
    </motion.div>
  );

  const nameElement = (
    <motion.div
      layout
      key={Segment.Name}
      className={[
        'absolute',
        open ? 'top-6 left-6 md:left-31 md:top-8.5' : 'bottom-5 left-5',
      ].join(' ')}
    >
      {!open && screenSize == ScreenSize.SM ? (
        <YText
          className={getTextColor(open)}
          {...getNameTextProps(open, screenSize)}
        >
          {name}
        </YText>
      ) : (
        <YHeading
          className={getTextColor(open)}
          {...getNameTextProps(open, screenSize)}
        >
          {name}
        </YHeading>
      )}
    </motion.div>
  );

  const roleElement = (
    <motion.div
      layout
      key={Segment.Role}
      className={[
        'absolute',
        open ? 'top-13 left-6 md:top-15.5 md:left-31' : 'top-4 right-4',
      ].join(' ')}
    >
      <YText className="text-gray-300">{role}</YText>
    </motion.div>
  );

  const textElement = open && (
    <motion.div
      key={Segment.Text}
      {...fadeInProps}
      className="absolute text-gray-300 left-6 right-6 top-22 md:left-5 md:right-5 md:top-30"
    >
      <YText as="p">{text}</YText>
    </motion.div>
  );

  const handleCardClick = (e: React.SyntheticEvent) => {
    // e.stopPropagation();
    if (!open) setOpen(true);
  };

  const containerClassName = [
    filterPosition(containerClasses, className),
    open ? 'cursor-default' : 'cursor-pointer',
  ].join(' ');

  return (
    <MotionConfig
      features={[AnimationFeature, ExitFeature, AnimateLayoutFeature]}
    >
      <div onClick={handleCardClick} className={containerClassName}>
        <AnimateSharedLayout>
          <AnimatePresence>
            {imageElement}
            {nameElement}
            {roleElement}
            {textElement}
            <YToggleRound
              open={open}
              className="absolute bottom-4 right-4"
              onClick={() => setOpen(!open)}
            />
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </MotionConfig>
  );
};

const containerClasses = [
  'bg-blue-200',
  'text-gray-400',
  'duration-200',
  'transition',
  'rounded-sm',
  'md:rounded',
  'border',
  'border-opacity-0',
  'border-blue-100',
  'hover:border-opacity-100',
  'hover:text-white',
];

// name segmet utils
const getTextColor = (open: boolean) => (open ? 'text-white' : 'text-current');

const getNameTextProps = (open: boolean, screenSize: ScreenSize) => {
  const props: Parameters<typeof YText>[0] = {
    fontWeight: FontWeight.SemiBold,
    as: 'h2',
  };
  if (open || screenSize == ScreenSize.MD) {
    props.fontSize = FontSize.LG;
  }
  return props;
};

// text / image fade
const getImageFadeProps = (initialRender: boolean) => {
  const initial = initialRender
    ? false
    : { ...fadeInProps.initial, scale: 0.8 };
  const animate = {
    ...fadeInProps.animate,
    scale: 1,
  };
  const exit = {
    ...fadeInProps.exit,
    scale: 0.8,
  };
  return { initial, animate, exit };
};

const fadeInProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
};

export default YTeamCard;
