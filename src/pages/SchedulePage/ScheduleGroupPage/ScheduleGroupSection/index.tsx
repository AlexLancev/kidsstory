import React from 'react';

import { scheduleGroupData } from 'constans/scheduleGroupData';

import styles from './ScheduleGroupSection.module.css';

export const ScheduleGroupSection: React.FC = () => {
  if (!scheduleGroupData || scheduleGroupData.length === 0) return null;

  return (
    <section className={styles.scheduleGroupSection}>
      <div className='container'>
        <h1 className={styles.scheduleGroupSectionTitle}>Расписание групп</h1>
        <div>
          {scheduleGroupData.map((group) => (
            <div className={styles.scheduleBox} key={group.groupName}>
              <h2 className={styles.scheduleHead}>{group.groupName}</h2>
              <table className={styles.scheduleTable}>
                <thead>
                  <tr>
                    <th className={styles.dailyDay}>День недели</th>
                    <th className={styles.dailyTime}>Время</th>
                    <th className={styles.dailyLesson}>Занятие</th>
                  </tr>
                </thead>
                <tbody>
                  {group.scheduleData.map((daySchedule) =>
                    daySchedule.schedule.map((item, index) => (
                      <tr key={item.id}>
                        {index === 0 && (
                          <td
                            rowSpan={daySchedule.schedule.length}
                            className={styles.dailyDayCell}
                          >
                            {daySchedule.day}
                          </td>
                        )}
                        <td>{item.time}</td>
                        <td>{item.subject}</td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};