import { dailyDietArray } from 'constans/DailyDietArray';

import styles from './DailyDietList.module.css';

export const DailyDietList = () => {
  if (!dailyDietArray || dailyDietArray.length === 0) return null;

  return (
    <ul className={styles.dailyDietTimeDayList}>
      {dailyDietArray.map(({ id, head, dish }, index: number) => (
        <li className={styles.dailyDietTimeDayListItem} key={id ?? index}>
          <strong className={styles.dailyDietListHead}>{head}</strong>
          <ul className={styles.dailyDietList}>
            {dish?.map((dishEl, index: number) => (
              <li className={styles.dailyDietListItem} key={dishEl ?? index}>
                <span className={styles.dailyDietDish}>{dishEl}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
