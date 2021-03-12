import React, { createElement, useRef } from 'react';
import { AriaButtonProps } from '@react-types/button';
import { useButton } from '@react-aria/button';
import { useHover, HoverProps } from '@react-aria/interactions';
import { m as motion, MotionConfig, AnimationFeature } from 'framer-motion';

import IconPlaceholder from '@/assets/icons/icon.svg';

import YLink from '@/components/YLink';

type CardProps = AriaButtonProps &
  HoverProps & {
    title?: string;
    description?: string;
    Icon?: JSX.Element;
    className?: string;
    onHover?: () => void;
    hovered?: boolean;
  };

interface Props extends CardProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
  cardClasses?: string;
  link?: string;
}

enum AnimateSection {
  Topface = 'topface',
  Icon = 'icon',
  Title = 'title',
  Subtitle = 'subtitle',
}

// wrapper component
const YCard: React.FC<Props> = ({
  as,
  className: classes,
  cardClasses,
  children,
  Icon,
  title,
  description,
  hovered,
  onHover,
  link,
  ...props
}) => {
  const assignedCustomTag = as ? as : 'div';

  const ref = useRef();

  const { buttonProps } = useButton(
    {
      ...(props as AriaButtonProps),
      elementType: assignedCustomTag,
    },
    ref
  );
  const { hoverProps } = useHover({ onHoverStart: onHover });

  // text section

  const titleTag = Boolean(onHover) ? motion.h6 : 'h6';
  const subtitleTag = Boolean(onHover) ? motion.p : 'p';

  const titleHoverProps = Boolean(onHover)
    ? getHoverProps(hovered, AnimateSection.Title)
    : {};
  const subtitleHoverProps = Boolean(onHover)
    ? getHoverProps(hovered, AnimateSection.Subtitle)
    : {};

  const text =
    title && description ? (
      [
        createElement(
          titleTag,
          { className: 'text title serif', ...titleHoverProps },
          title
        ),
        createElement(
          subtitleTag,
          { className: 'text subtitle sans', ...subtitleHoverProps },
          description
        ),
      ]
    ) : (
      <>
        <div className="placeholder placeholder-title" />
        <div className="placeholder placeholder-subtitle" />
      </>
    );

  // icon section
  const iconTag = Boolean(onHover) ? motion.div : 'div';

  const iconHoverProps = Boolean(onHover)
    ? getHoverProps(hovered, AnimateSection.Icon)
    : {};

  const icon = createElement(
    iconTag,
    {
      key: 'icon',
      className: 'icon fill-current flex items-stretch',
      ...iconHoverProps,
    },
    Icon || <IconPlaceholder />
  );

  // topface section
  const CustomTag = Boolean(onHover)
    ? motion[assignedCustomTag]
    : assignedCustomTag;

  const className = filterDefaultCard(baseClasses, cardClasses);

  const cardHoverProps = Boolean(onHover)
    ? getHoverProps(hovered, AnimateSection.Topface)
    : {};

  const Card = createElement(
    CustomTag,
    {
      ref,
      key: 'card',
      className,
      ...hoverProps,
      ...buttonProps,
      ...cardHoverProps,
    },
    [icon, text]
  );

  // container element section
  const containerClasses = ['w-43.6 h-53.6', classes].join(' ');
  return (
    <YLink href={link || ''}>
      <div className={containerClasses}>
        <MotionConfig features={[AnimationFeature]}>{Card}</MotionConfig>
        {children}
      </div>
    </YLink>
  );
};

// local utils
export const filterDefaultCard = (baseClasses: string[], classes: string) =>
  classes?.split(' ').includes('card')
    ? [
        ...baseClasses.filter((className) => className != 'card-white'),
        classes,
      ].join(' ')
    : [...baseClasses, classes].join(' ') || baseClasses.join(' ');

const baseClasses = [
  'rounded',
  'mt-2',
  'ml-3',
  'px-2.5',
  'z-10',
  'w-40',
  'h-50',
  'pt-6.5',
  'card-white',
];

// framer motion props
const getHoverProps = (isHovered: boolean, section: AnimateSection) => ({
  animate: isHovered ? 'hovered' : 'initial',
  variants: animateVariants[section],
  transition: { duration: 0.03, delay: 0 },
});

const animateVariants = {
  [AnimateSection.Topface]: {
    initial: {
      backgroundColor: '#FFFFFF',
      boxShadow: [
        '-1px 1px #D5DFE9,',
        '-2px 2px #D5DFE9,',
        '-3px 3px #D5DFE9,',
        '-4px 4px #D5DFE9,',
        '-5px 5px #D5DFE9,',
        '-6px 6px #D5DFE9,',
        '-7px 7px #D5DFE9',
      ].join(' '),
    },
    hovered: {
      backgroundColor: '#305EED',
      boxShadow: [
        '-1px 1px #143DB0,',
        '-2px 2px #143DB0,',
        '-3px 3px #143DB0,',
        '-4px 4px #143DB0,',
        '-5px 5px #143DB0,',
        '-6px 6px #143DB0,',
        '-7px 7px #143DB0',
      ].join(' '),
    },
  },
  [AnimateSection.Title]: {
    initial: {
      color: '#305EED',
    },
    hovered: {
      color: '#FFFFFF',
    },
  },
  [AnimateSection.Subtitle]: {
    initial: {
      color: '#80B0C8',
    },
    hovered: {
      color: '#FFFFFF',
    },
  },
  [AnimateSection.Icon]: {
    initial: {
      color: '#BFD8E4',
    },
    hovered: {
      color: '#FFFFFF',
    },
  },
};

export default YCard;
