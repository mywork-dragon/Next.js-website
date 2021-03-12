import React from 'react';

import IconPlaceholder from '@/assets/icons/icon.svg';

import { filterDefaultCard } from './YCard';

interface Props {
  Icon?: JSX.Element;
  empty?: boolean;
  className?: string;
  cardClasses?: string;
  title?: string;
  description?: string;
}

const YCardBasic: React.FC<Props> = ({
  empty,
  className: classes,
  cardClasses,
  title,
  description,
  Icon,
  children,
}) => {
  const isTransparent = cardClasses?.includes('transparent');

  const icon = (
    <div className="icon fill-current flex items-stretch">
      {!isTransparent && (Icon || <IconPlaceholder />)}
    </div>
  );

  const text =
    title && description ? (
      <>
        <h6 className="text title serif">{title}</h6>
        <p className="text subtitle sans">{description}</p>
      </>
    ) : (
      <>
        <div className="placeholder placeholder-title" />
        <div className="placeholder placeholder-subtitle" />
      </>
    );

  return (
    <div className={['w-43.6 h-53.6', classes].join(' ')}>
      <div className={filterDefaultCard(baseClasses, cardClasses)}>
        {!empty && (
          <>
            {icon}
            {text}
          </>
        )}
      </div>
      {children}
    </div>
  );
};

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

export default YCardBasic;
