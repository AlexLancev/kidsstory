import { FC } from 'react';

import { DailyRoutine } from './DailyRoutine';

import styles from './DailyRoutineSection.module.css';

export const DailyRoutineSection: FC = () => {
  return (
    <section className={styles.dailyRoutineSection}>
      <div className='container'>
        <h1 className={styles.dailyRoutineSectionTitle}>
          Режим дня на холодный период
        </h1>
        <DailyRoutine />
      </div>
    </section>
  );
};
