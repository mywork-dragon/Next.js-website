import React, { useState, useRef } from 'react';

import { Language } from '@/enums/language';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import YText from '@/components/YText';
import YExpandableRegion from '@/components/AnimateComponents/YExpandableRegion';
import YAnimateItem from '@/components/AnimateComponents/YAnimateItem';

import useClickOutside from '@/hooks/useClickOutside';

import ArrowDown from '@/assets/icons/chevron-down.svg';

import flags from './flags';
import { useRouter } from 'next/dist/client/router';

interface Props {
  className?: string;
  locales?: Language[];
}

const YSelect: React.FC<Props> = ({ className, locales = [] }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useClickOutside(ref, () => setOpen(false));

  const {
    query: { lang, page },
    push: routerPush,
  } = useRouter();

  const current =
    !lang || typeof lang != 'string' || lang == 'en' ? 'uk' : lang;

  const onLangClick = (lang: Language) => {
    setOpen(!open);

    const pageURI =
      typeof page == 'string' ? page : Boolean(page) ? page.join('/') : '';

    const newPath = `${lang != 'uk' ? `/${lang}` : '/en'}/${pageURI}`;

    routerPush(newPath);
  };

  const flagsToShow = [...locales, 'uk'].filter((lang) => lang != current);

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
      <YText className="text-white" {...textProps}>
        {current}
      </YText>
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
            <YText {...textProps} className="text-white m-1">
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

export default YSelect;
