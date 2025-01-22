import { DailyRoutine } from './DailyRoutine';

import styles from './DailyRoutineSection.module.css';

export const DailyRoutineSection = () => {
  return (
    <section className={styles.dailyRoutineSection}>
        <h1 className={styles.dailyRoutineSectionTitle}>Режим дня на холодный период</h1>
        <DailyRoutine />
    </section>
  );
};
