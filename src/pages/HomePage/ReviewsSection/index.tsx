import React from 'react';
import { ReviewsList } from 'components/ReviewsList';

import trianglePinkBg from 'assets/img/svg/triangle-pink-bg.svg';

import styles from './ReviewsSection.module.css';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      className={`${styles.reviewsSection} reviews-section`}
      style={{
        background: `#f2f2ff url(${trianglePinkBg}) 1000px 50px no-repeat`,
      }}
    >
      <div className='container'>
        <h2 className={styles.reviewsSectionTitle}>Отзывы о саде</h2>
        <div className={styles.reviewsSectionInner}>
          <ReviewsList />
        </div>
      </div>
    </section>
  );
};