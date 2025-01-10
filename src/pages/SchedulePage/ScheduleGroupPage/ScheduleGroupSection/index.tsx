import { scheduleGroupData } from 'constans/scheduleGroupData';

import styles from './ScheduleGroupSection.module.css';

export const ScheduleGroupSection = () => {
  if (!scheduleGroupData || scheduleGroupData.length === 0) return null;

  return (
    <section className={styles.scheduleGroupSection}>
      <h1 className={styles.scheduleGroupSectionTitle}>Расписание групп</h1>
      {scheduleGroupData.map(({ groupName, scheduleData }, index: number) => (
        <div className={styles.scheduleBox} key={groupName ?? index}>
          <h2 className={styles.scheduleHead}>{groupName}</h2>
          <table className={styles.scheduleTable}>
            <thead>
              <tr>
                <th className={styles.dailyDay}>День недели</th>
                <th className={styles.dailyTime}>Время</th>
                <th className={styles.dailyLesson}>Занятие</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map(({ schedule, day }) =>
                schedule.map(({ id, time, subject }, index: number) => (
                  <tr key={id ?? index}>
                    {index === 0 && (
                      <td rowSpan={schedule.length} className={styles.dailyDayCell}>
                        {day}
                      </td>
                    )}
                    <td>{time}</td>
                    <td className={styles.subject}>{subject}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      ))}
    </section>
  );
};
