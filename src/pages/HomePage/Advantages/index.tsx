import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { AdvantagesType } from 'types/api/advantages';

import CrownBg from 'assets/img/svg/crown-bg.svg';

import styles from './Advantages.module.css';

export const Advantages: React.FC = () => {
  const { advantagesArray, isLoading } = useSelector(
    (state: RootState) => state.advantages,
  );

  if (isLoading || !advantagesArray) {
    return null;
  }

  return (
    <section
      className={styles.advantages}
      style={{ background: `url(${CrownBg}) no-repeat 0% 0% / 126px` }}
    >
      <div className='container'>
        {advantagesArray && (
          <ul className={styles.advantagesList}>
            {advantagesArray.map((item: AdvantagesType, index: number) => (
              <li
                key={item._id || index}
                className={styles.advantagesListItem}
                style={{ backgroundImage: `url(${item.icon})` }}
              >
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
