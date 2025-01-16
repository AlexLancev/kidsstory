import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { AdvantagesLoader } from 'components';

import styles from './Advantages.module.css';

export const Advantages = () => {
  const { advantagesArray, isLoading } = useSelector((state: RootState) => state.advantages);

  if (isLoading || !advantagesArray || advantagesArray.length === 0) {
    return (
      <section className={styles.advantages}>
        <ul className={styles.advantagesList}>
          {Array.from({ length: 9 }).map((_, index: number) => (
            <AdvantagesLoader key={index} />
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className={styles.advantages}>
      <ul className={styles.advantagesList}>
        {advantagesArray.map(({ _id, icon, head, text }: AdvantagesType, index: number) => (
          <li
            key={_id ?? index}
            className={styles.advantagesListItem}
            style={{ backgroundImage: `url(${icon})` }}
          >
            <strong className={styles.advantagesHead}>{head}</strong>
            <span className={styles.advantagesText}>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
