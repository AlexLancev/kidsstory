import { ProgramList } from './ProgramList';

import styles from './ProgramSection.module.css';

export const ProgramSection = () => {
  return (
    <section className={styles.programSection}>
      <div className='container'>
        <div className={styles.programSectionInner}>
          <h1 className={styles.programSectionTitle}>Программа</h1>
          <ProgramList />
        </div>
      </div>
    </section>
  );
};
