import { ReviewsList } from 'components/ReviewsList';

import styles from './ReviewsPage.module.css';

export const ReviewsPage = () => {
  return (
    <section className={styles.reviewsPage}>
      <div className='container'>
        <h1 className={styles.reviewsTitle}>Отзывы</h1>
        <ReviewsList extraClass={styles['reviewsCurrent--bg']} />
      </div>
    </section>
  );
};
