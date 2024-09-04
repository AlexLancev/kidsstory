import React from 'react';

import { programArray } from 'constans/programArray';

import styles from './ProgramList.module.css';

export const ProgramList: React.FC = () => {
  if (!programArray || programArray.length === 0) return null;

  return (
    <ul className={styles.programList}>
      {programArray.map((item, index: number) => (
        <li className={styles.programListItem} key={item.id || index}>
          <img
            className={styles.programImg}
            src={item.image}
            width={460}
            height={307}
            alt=''
            aria-hidden
          />
          <div className={styles.programInfo}>
            <b className={styles.programHead}>{item.head}</b>
            <p className={styles.programDescriptions}>{item.descriptions}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
