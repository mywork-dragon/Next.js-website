import React, { useState, useRef } from 'react';

import { Language } from '@/enums/language';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import YText from '@/components/YText';
import ExpandableRegion from '@/components/AnimateComponents/ExpandableRegion';
import AnimateItem from '@/components/AnimateComponents/AnimateItem';

import useClickOutside from '@/hooks/useClickOutside';

import ArrowDown from '@/assets/icons/chevron-down.svg';

import flags from './flags';

interface Props {
  onChange?: (lang: Language) => any;
  className?: string;
  current?: Language;
}

const OSelect: React.FC<Props> = ({
  className,
  onChange = () => {},
  current = Language.UK,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setOpen(false));

  const onLangClick = (lang: Language) => {
    setOpen(!open);
    onChange(lang);
  };

  const keysToShow = Object.keys(flags).filter((lang) => lang != current);

  return (
    <div
      ref={ref}
      className={[...containerClasses, className].join(' ')}
      onClick={() => {
        setOpen(!open);
        console.log('click');
      }}
    >
      <div className="w-7 mx-1">{flags[current]}</div>
      <YText {...textProps}>{current}</YText>
      <div className="h-3 w-3 mx-1 flex items-center">
        <ArrowDown />
      </div>
      <ExpandableRegion
        className="absolute top-full z-50 bg-blue-400 border-blue-300"
        open={open}
      >
        {keysToShow.map((lang) => (
          <AnimateItem
            key={lang}
            onClick={() => onLangClick(lang as Language)}
            className={[...containerClasses, 'm-1'].join(' ')}
          >
            <div className="w-7 m-1">{flags[lang]}</div>
            <YText {...textProps} className="m-1">
              {lang}
            </YText>
          </AnimateItem>
        ))}
      </ExpandableRegion>
    </div>
  );
};

const containerClasses = [
  'relative',
  'flex',
  'items-center',
  'justify-flex-start',
  'h-7',
  'cursor-pointer',
];

const textProps = {
  fontSize: FontSize.XS,
  lineHeight: FontLineHeight.Tight,
  fontWeight: FontWeight.SemiBold,
  as: 'p',
} as Parameters<typeof YText>[0];

export default OSelect;
