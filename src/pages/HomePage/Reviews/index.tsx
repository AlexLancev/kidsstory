import React from 'react';
import { ReviewsList } from 'components/ReviewsList';

import styles from './Reviews.module.css';

export const Reviews: React.FC = () => {
  return (
    <section className={styles.review}>
      <div className='container'>
        <h2 className={styles.reviewTitle}>Отзывы о саде</h2>
        <ReviewsList />
      </div>
    </section>
  );
};
