import { programArray } from 'constans/programArray';

import styles from './ProgramList.module.css';

export const ProgramList = () => {
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
            loading='lazy'
            aria-hidden
          />
          <div className={styles.programInfo}>
            <strong className={styles.programHead}>{item.head}</strong>
            <p className={styles.programDescriptions}>{item.descriptions}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
