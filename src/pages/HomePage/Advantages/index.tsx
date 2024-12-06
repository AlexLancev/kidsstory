import { FC } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { AdvantagesLoader } from 'components';
import { AdvantagesType } from 'types/api/advantages';

import styles from './Advantages.module.css';

export const Advantages: FC = () => {
  const { advantagesArray, isLoading } = useSelector(
    (state: RootState) => state.advantages,
  );

  if (isLoading || !advantagesArray || advantagesArray.length === 0) {
    return (
      <ul className={styles.advantagesList}>
        {Array.from({ length: 9 }).map((_, index: number) => (
          <AdvantagesLoader key={index} />
        ))}
      </ul>
    );
  }

  return (
    <section className={styles.advantages}>
      <ul className={styles.advantagesList}>
        {advantagesArray.map((item: AdvantagesType, index: number) => (
          <li
            key={item._id || index}
            className={styles.advantagesListItem}
            style={{ backgroundImage: `url(${item.icon})` }}
          >
            <strong className={styles.advantagesHead}>{item.head}</strong>
            <span className={styles.advantagesText}>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
