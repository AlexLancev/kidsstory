import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { AdvantagesType } from 'types/api/advantages';

import styles from './Advantages.module.css';

export const Advantages: React.FC = () => {
  const { advantagesArray, isLoading } = useSelector(
    (state: RootState) => state.advantages,
  );

  if (isLoading || !advantagesArray) {
    return;
  }

  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        {advantagesArray && (
          <ul className={styles.advantagesList}>
            {advantagesArray.map((item: AdvantagesType, index: number) => (
              <li key={item._id || index} className={styles.advantagesListItem}>
                <b className={styles.advantagesHead}>{item.head}</b>
                <span className={styles.advantagesText}>{item.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
