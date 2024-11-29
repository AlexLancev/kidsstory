import { useLocation } from 'react-router-dom';

import { BreadCrumbs, BreadCrumbsI, ReviewsList } from 'components';

import styles from './ReviewsPage.module.css';

export const ReviewsPage = () => {
  const location = useLocation();
  const state = location.state as BreadCrumbsI | null;

  return (
    <>
      <BreadCrumbs currentPage={state?.currentPage} />
      <section className={styles.reviewsPage}>
        <div className='container'>
          <h1 className={styles.reviewsTitle}>Отзывы</h1>
          <ReviewsList extraClass={styles['reviewsCurrent--bg']} />
        </div>
      </section>
    </>
  );
};
