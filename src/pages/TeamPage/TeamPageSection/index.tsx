import { TeamList } from 'components';

import styles from './TeamPageSection.module.css';

export const TeamPageSection = () => {
  return (
    <div className={styles.teamPageSection}>
      <h1 className={styles.teamPageSectionTitle}>Наша команда</h1>
      <TeamList />
    </div>
  );
};
