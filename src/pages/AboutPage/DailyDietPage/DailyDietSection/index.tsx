import { FC } from 'react';

import { DailyDietList } from './DailyDietList';
import { DailyDietListImg } from './DailyDietListImg';

import styles from './DailyDietSection.module.css';

export const DailyDietSection: FC = () => {
  return (
    <section className={styles.DailyDietSection}>
      <div className='container'>
        <h1 className={styles.dailyDietSectionTitle}>Питание на 1 день</h1>
        <div className={styles.dailyDietSectionInner}>
          <DailyDietList />
          <DailyDietListImg />
        </div>
      </div>
    </section>
  );
};
