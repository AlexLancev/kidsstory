import React from 'react';
import { TeamList } from 'components/TeamList';

import styles from './Team.module.css';

interface TeamType {
  isSlider: boolean;
}

export const Team: React.FC<TeamType> = ({isSlider}) => {
  return (
    <section className={styles.team}>
      <h2 className={styles.teamTitle}>Наша команда</h2>
      <TeamList isSlider />
    </section>
  );
};
