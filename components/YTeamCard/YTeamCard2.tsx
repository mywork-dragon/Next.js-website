import React, { useState } from 'react';
import Image from 'next/image';
import {
  m as motion,
  AnimationFeature,
  MotionConfig,
  AnimatePresence,
  ExitFeature,
  AnimateSharedLayout,
  MotionProps,
} from 'framer-motion';
import { useWindowWidth } from '@react-hook/window-size';

import filterPosition from '@/libs/utils/filterPosition';

import { BreakPoint, ScreenSize } from '@/enums/screenSize';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import YToggleRound from '@/components/YToggleRound';
import YText from '@/components/YText';
import YHeading from '@/components/YHeading';

export interface TeamMemeber {
  name: string;
  role: string;
  text: string;
  image: string;
  className?: string;
}

enum Segment {
  Image = 'image',
  Name = 'name',
  Role = 'role',
  Text = 'text',
}

const YTeamCard: React.FC<TeamMemeber> = ({
  name,
  role,
  text,
  image,
  className,
}) => {
  const [open, setOpen] = useState(false);

  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  const imageElement = (
    <motion.div
      key={Segment.Image}
      className="absolute rounded-full border-primary border"
    >
      <Image src={image} layout="fill" className="object-cover" />
    </motion.div>
  );

  const nameElement = (
    <motion.div
      key={Segment.Name}
      className="absolute"
      {...getNameRoleMotionProps(Segment.Name, open, screenSize)}
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
      key={Segment.Role}
      {...getNameRoleMotionProps(Segment.Role, open, screenSize)}
      className="absolute"
    >
      <YText
        className="text-gray-300"
        lineHeight={open ? FontLineHeight.Tight : FontLineHeight.Loose}
      >
        {role}
      </YText>
    </motion.div>
  );

  const textElement = open && (
    <motion.div
      key={Segment.Text}
      {...textMotionProps}
      className="absolute text-gray-300 left-6 right-6 top-22 md:left-5 md:right-5 md:top-30"
    >
      <YText lineHeight={FontLineHeight.Loose} as="p">
        {text}
      </YText>
    </motion.div>
  );

  return (
    <MotionConfig features={[AnimationFeature, ExitFeature]}>
      <div className={filterPosition(containerClasses, className)}>
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
  'text-gray-400',
  'duration-200',
  'transition',
  'cursor-pointer',
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
  if (!open && screenSize == ScreenSize.SM) {
    props.lineHeight = FontLineHeight.Relaxed;
  } else {
    props.fontSize = FontSize.LG;
  }
  return props;
};

const getNameRoleMotionProps = (
  segment: Segment.Name | Segment.Role,
  open: boolean,
  screenSize: ScreenSize
): MotionProps => {
  const variants = {
    closed: nameRoleMotionProps[segment].closed,
    open: nameRoleMotionProps[segment].open[screenSize],
  };
  const animate = open ? 'open' : 'closed';
  const transition = { type: 'linear' };

  return { initial: variants.closed, animate, variants, transition };
};

const nameRoleMotionProps = {
  [Segment.Name]: {
    closed: {
      left: 20,
      bottom: 21,
    },
    open: {
      [ScreenSize.SM]: {
        top: 24,
        left: 24,
      },
      [ScreenSize.MD]: {
        top: 34,
        left: 124,
      },
    },
  },

  [Segment.Role]: {
    closed: {
      top: 16,
      right: 16,
    },
    open: {
      [ScreenSize.SM]: {
        top: 52,
        left: 24,
      },
      [ScreenSize.MD]: {
        top: 62,
        left: 124,
      },
    },
  },
};

// text segment utils
const textMotionProps = {
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
