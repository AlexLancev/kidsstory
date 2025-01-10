import { programArray } from 'constans/programArray';

import styles from './ProgramList.module.css';

export const ProgramList = () => {
  if (!programArray || programArray.length === 0) return null;

  return (
    <ul className={styles.programList}>
      {programArray.map(({ id, image, head, descriptions }, index: number) => (
        <li className={styles.programListItem} key={id ?? index}>
          <img
            className={styles.programImg}
            src={image}
            width={460}
            height={307}
            alt=''
            loading='lazy'
            aria-hidden
          />
          <div className={styles.programInfo}>
            <strong className={styles.programHead}>{head}</strong>
            <p className={styles.programDescriptions}>{descriptions}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
