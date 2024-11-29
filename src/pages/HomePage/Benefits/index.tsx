import { FC } from 'react';

import { BenefitsList } from './BenefitsList';

import styles from './Benefits.module.css';

export const Benefits: FC = () => {
  return (
    <section className={styles.benefits}>
      <div className='container'>
        <h2 className={styles.benefitsTitle}>Преимущества</h2>
        <p className={styles.benefitsText}>
          Наша авторская программа ведётся на русском и английском языках и
          состоит из увлекательных мероприятий
        </p>
        <BenefitsList />
      </div>
    </section>
  );
};
