import React from 'react';

import { scheduleGroupData } from 'constans/scheduleGroupData';

import styles from './ScheduleGroupSection.module.css';

export const ScheduleGroupSection: React.FC = () => {
  if (!scheduleGroupData || scheduleGroupData.length === 0) return null;
  return (
    <section className={styles.scheduleGroupSection}>
      <div className='container'>
        <h1 className={styles.scheduleGroupSectionTitle}>Расписание групп</h1>
        {scheduleGroupData.map((group) => (
          <div key={group.groupName}>
            <h2>{group.groupName}</h2>
            <table className={styles.scheduleTable}>
              <thead>
                <tr>
                  <th>День недели</th>
                  <th>Время</th>
                  <th>Занятие</th>
                </tr>
              </thead>
              <tbody>
                {group.scheduleData.map((daySchedule) =>
                  daySchedule.schedule.map((item, index) => (
                    <tr key={item.id}>
                      {index === 0 && (
                        <td rowSpan={daySchedule.schedule.length}>
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
    </section>
  );
};
