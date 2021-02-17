/* eslint-disable react/prop-types */
import React, { AriaAttributes } from 'react';
import styles from './YCard.module.css';

type Props = AriaAttributes & {
  icon?: string;
  title: string;
  description: string;
  className?: string;
};

const YCard: React.FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.base}>
      <div className={styles.shadow}>
        <div className={styles.bg}></div>
      </div>
    </div>
  );
};

export default YCard;
