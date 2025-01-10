import { dailyRoutineData } from 'constans/dailyRoutineData';

import styles from './DailyRoutine.module.css';

export const DailyRoutine = () => {
  if (!dailyRoutineData || dailyRoutineData.length === 0) return null;

  return (
    <section className={styles.dailyRoutine}>
      {dailyRoutineData.map(({ timePeriod, activities }, index: number) => (
        <div key={timePeriod ?? index} className={styles.dailyRow}>
          <b>{timePeriod}</b>
          <table className={styles.dailyRoutineTable}>
            <thead>
              <tr>
                <th className={styles.dailyType}>Вид деятельности</th>
                <th className={styles.dailyTime}>Время</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(({ id, activity, time }, index: number) => (
                <tr key={id ?? index}>
                  <td>{activity}</td>
                  <td className={styles.dailyTimeCell}>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </section>
  );
};
