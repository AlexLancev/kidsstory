import React from 'react';

import { TeamList } from 'components/TeamSection/TeamList';

import styles from './TeamPageSection.module.css';

export const TeamPageSection: React.FC = () => {
  return (
    <div className={styles.teamPageSection}>
      <h1 className={styles.teamPageSectionTitle}>Наша команда</h1>
      <TeamList />
    </div>
  );
};
