import { BenefitsList } from './BenefitsList';

import styles from './Benefits.module.css';

export const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <h2 className={styles.benefitsTitle}>Преимущества</h2>
      <p className={styles.benefitsText}>
        Наша авторская программа ведётся на русском и английском языках и состоит из увлекательных
        мероприятий
      </p>
      <BenefitsList />
    </section>
  );
};
