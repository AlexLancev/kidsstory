import { ReviewsList } from 'components/ReviewsList';

import styles from './ReviewsPage.module.css';

export const ReviewsPage = () => {
  return (
    <section className={styles.reviewsPage}>
      <div className='container'>
        <ReviewsList />
      </div>
    </section>
  );
};
