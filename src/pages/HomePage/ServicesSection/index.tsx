import { FC } from 'react';

import { ServicesList } from 'components';

import styles from './ServicesSection.module.css';

export const ServicesSection: FC = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.servicesSectionTitle}>Дополнительные услуги</h2>
      <ServicesList isIncludeImagePromo={false} />
    </section>
  );
};
