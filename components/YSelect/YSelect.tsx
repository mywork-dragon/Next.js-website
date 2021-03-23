import React, { useState, useRef } from 'react';

import { Language } from '@/enums/language';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import YText from '@/components/YText';
import YExpandableRegion from '@/components/AnimateComponents/YExpandableRegion';
import YAnimateItem from '@/components/AnimateComponents/YAnimateItem';

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

  const flagsToShow = Object.keys(flags).filter((lang) => lang != current);

  return (
    <div
      ref={ref}
      className={[...containerClasses, className].join(' ')}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="w-7 mx-1">
        <img src={flags[current]} />
      </div>
      <YText {...textProps}>{current}</YText>
      <div className="h-3 w-3 mx-1 flex items-center">
        <ArrowDown />
      </div>
      <YExpandableRegion
        className="absolute top-full z-50 bg-blue-400 border-blue-300"
        open={open}
      >
        {flagsToShow.map((lang) => (
          <YAnimateItem
            key={lang}
            onClick={() => onLangClick(lang as Language)}
            className={[...containerClasses, 'm-1'].join(' ')}
          >
            <div className="w-7 m-1">
              <img src={flags[lang]} />
            </div>
            <YText {...textProps} className="m-1">
              {lang}
            </YText>
          </YAnimateItem>
        ))}
      </YExpandableRegion>
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
