import { createElement, HTMLAttributes } from 'react';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

interface Props extends HTMLAttributes<HTMLElement> {
  tag?: keyof JSX.IntrinsicElements;
  size?: FontSize;
  weight?: FontWeight;
  lineHeight?: FontLineHeight;
}

export default function YHeading({
  tag = 'span',
  size = FontSize['3XL'],
  weight = FontWeight.Bold,
  lineHeight = FontLineHeight.Tight,
  children,
  ...props
}: Props): JSX.Element {
  const CustomTag = tag;

  const classes = getFontClasses({ size, lineHeight, weight });
  classes.push('font-serif');

  return createElement(
    CustomTag,
    { className: classes.join(' '), ...props },
    children
  );
}

/**
 * Returns the font classes
 *
 * @param size
 * @param lineHeight
 * @param weight
 */
const getFontClasses = ({ size, lineHeight, weight }): string[] => {
  return [
    fontSizeLookup[size]?.size,
    fontSizeLookup[size].lineHeight[lineHeight],
    fontWeightLookup[weight],
  ];
};

const fontSizeLookup = {
  [FontSize.XXS]: {
    size: 'text-xxs',
    lineHeight: {
      [FontLineHeight.Tight]: 'leading-4',
      [FontLineHeight.Relaxed]: 'leading-6',
      [FontLineHeight.Loose]: 'leading-8',
    },
  },
  [FontSize.XS]: {
    size: 'text-xs',
    lineHeight: {
      [FontLineHeight.Tight]: 'leading-5',
      [FontLineHeight.Relaxed]: 'leading-7',
      [FontLineHeight.Loose]: 'leading-9',
    },
  },
  [FontSize.SM]: {
    size: 'text-sm',
    lineHeight: {
      [FontLineHeight.Tight]: 'leading-6',
      [FontLineHeight.Relaxed]: 'leading-8',
      [FontLineHeight.Loose]: 'leading-10',
    },
  },
  [FontSize.MD]: {
    size: 'text-md',
    lineHeight: {
      [FontLineHeight.Tight]: 'leading-7',
      [FontLineHeight.Relaxed]: 'leading-9',
      [FontLineHeight.Loose]: 'leading-11',
    },
  },
  [FontSize.LG]: {
    size: 'text-lg',
    lineHeight: {
      [FontLineHeight.Tight]: 'leading-9',
      [FontLineHeight.Relaxed]: 'leading-11',
      [FontLineHeight.Loose]: 'leading-12',
    },
  },
  [FontSize.XL]: {
    size: 'text-xl',
    lineHeight: {
      [FontLineHeight.Tight]: 'leading-11',
      [FontLineHeight.Relaxed]: 'leading-12',
      [FontLineHeight.Loose]: 'leading-13',
    },
  },
  [FontSize.XXL]: {
    size: 'text-xxl',
    lineHeight: {
      [FontLineHeight.Tight]: 'leading-13',
      [FontLineHeight.Relaxed]: 'leading-15',
      [FontLineHeight.Loose]: 'leading-17',
    },
  },
  [FontSize['2XL']]: {
    size: 'text-2xl',
    lineHeight: {
      [FontLineHeight.Tight]: 'leading-17',
      [FontLineHeight.Relaxed]: 'leading-18',
      [FontLineHeight.Loose]: 'leading-19',
    },
  },
  [FontSize['3XL']]: {
    size: 'text-3xl',
    lineHeight: {
      [FontLineHeight.Tight]: 'leading-17',
      [FontLineHeight.Relaxed]: 'leading-18',
      [FontLineHeight.Loose]: 'leading-19',
    },
  },
  [FontSize['4XL']]: {
    size: 'text-4xl',
    lineHeight: {
      [FontLineHeight.Tight]: 'leading-19',
      [FontLineHeight.Relaxed]: 'leading-20',
      [FontLineHeight.Loose]: 'leading-21',
    },
  },
};

const fontWeightLookup = {
  [FontWeight.Regular]: 'font-normal',
  [FontWeight.Medium]: 'font-medium',
  [FontWeight.SemiBold]: 'font-semibold',
  [FontWeight.Bold]: 'font-bold',
  [FontWeight.ExtraBold]: 'font-extrabold',
};
