import { FC } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { AdvantagesLoader } from 'components';
import { AdvantagesType } from 'types/api/advantages';

import CrownBg from 'assets/img/svg/crown-bg.svg';

import styles from './Advantages.module.css';

export const Advantages: FC = () => {
  const { advantagesArray, isLoading } = useSelector(
    (state: RootState) => state.advantages,
  );

  return (
    <section
      className={styles.advantages}
      style={{ background: `url(${CrownBg}) no-repeat 0% 0% / 126px` }}
    >
      <div className='container'>
        <ul className={styles.advantagesList}>
          {isLoading || !advantagesArray
            ? Array.from({ length: 9 }).map((_, index: number) => (
                <AdvantagesLoader key={index} />
              ))
            : advantagesArray.map((item: AdvantagesType, index: number) => (
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
      </div>
    </section>
  );
};
