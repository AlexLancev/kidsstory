import React from 'react';

import { ServicesList } from 'components/ServicesList';

import styles from './ServicesSection.module.css';

export const ServicesSection: React.FC = () => {
  return (
    <section className={styles.servicesSection}>
      <div className='container'>
        <h2 className={styles.servicesSectionTitle}>Дополнительные услуги</h2>
        <ServicesList isIncludeImagePromo={false} />
      </div>
    </section>
  );
};
