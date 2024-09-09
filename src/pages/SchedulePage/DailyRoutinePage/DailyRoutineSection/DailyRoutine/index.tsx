import React from 'react';

import { dailyRoutineData } from 'constans/dailyRoutineData';

import styles from './DailyRoutine.module.css';

export const DailyRoutine: React.FC = () => {
  if (!dailyRoutineData || dailyRoutineData.length === 0) return null;

  return (
    <section className={styles.dailyRoutine}>
      <div className='container'>
        {dailyRoutineData.map((period) => (
          <div key={period.timePeriod} className={styles.dailyRow}>
            <b>{period.timePeriod}</b>
            <table className={styles.dailyRoutineTable}>
              <thead>
                <tr>
                  <th className={styles.dailyType}>Вид деятельности</th>
                  <th className={styles.dailyTime}>Время</th>
                </tr>
              </thead>
              <tbody>
                {period.activities.map((activity) => (
                  <tr key={activity.id}>
                    <td>{activity.activity}</td>
                    <td>{activity.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
};
