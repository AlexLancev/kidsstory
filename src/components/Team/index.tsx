import { FC } from 'react';
import { TeamSlider } from 'components';

import styles from './Team.module.css';

export const Team: FC = () => {
  return (
    <section className={styles.team}>
      <h2 className={styles.teamTitle}>Наша команда</h2>
      <TeamSlider />
    </section>
  );
};
