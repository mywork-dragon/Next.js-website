import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

import { filterDefaultCard } from './YCard';

interface Props {
  icon?: string;
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
  icon,
  children,
}) => {
  const Icon = useMemo(
    () => dynamic(() => import(`@/assets/icons/${icon}.svg`)),
    []
  );

  const iconElement = (
    <div className="icon fill-current flex items-stretch">
      <Icon />
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
            {iconElement}
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
