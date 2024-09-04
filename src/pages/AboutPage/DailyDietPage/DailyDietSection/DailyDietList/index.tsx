import React from 'react';

import { dailyDietArray } from 'constans/DailyDietArray';

import styles from './DailyDietList.module.css';

export const DailyDietList: React.FC = () => {
  if (!dailyDietArray || dailyDietArray.length === 0) return null;

  return (
    <ul className={styles.dailyDietTimeDayList}>
      {dailyDietArray.map((item, index: number) => (
        <li className={styles.dailyDietTimeDayListItem} key={item.id || index}>
          <b className={styles.dailyDietListHead}>{item.head}</b>
          <ul className={styles.dailyDietList}>
            {item.dish?.map((dish, index: number) => (
              <li className={styles.dailyDietListItem} key={dish || index}>
                <span className={styles.dailyDietDish}>{dish}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
