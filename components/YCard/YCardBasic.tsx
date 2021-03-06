import React from 'react';

interface Props {
  empty?: boolean;
  className?: string;
  cardClasses?: string;
}

const TransparentCard: React.FC<Props> = ({
  empty,
  className: classes,
  cardClasses,
}) => (
  <div className={['w-43.6 h-53.6', classes].join(' ')}>
    <div
      className={[
        'rounded',
        'mt-2',
        'ml-3',
        'px-2.5',
        // 'z-10',
        'w-40',
        'h-50',
        'pt-6.5',
        cardClasses,
      ].join(' ')}
    >
      {!empty && (
        <>
          <div className="icon fill-current"></div>
          <div className="placeholder placeholder-title" />
          <div className="placeholder placeholder-subtitle" />
        </>
      )}
    </div>
  </div>
);

export default TransparentCard;
