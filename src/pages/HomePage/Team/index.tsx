import React from 'react';
import { TeamList } from 'components/TeamList';

import styles from './Team.module.css';

export const Team: React.FC = () => {
  return (
    <section className={styles.team}>
      <h2 className={styles.teamTitle}>Наша команда</h2>
      <TeamList />
    </section>
  );
};
