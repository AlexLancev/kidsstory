import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'store/index';

import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewsType } from 'types/index';

import styles from './ReviewsList.module.css';

export const ReviewsList: React.FC = () => {
  const { reviewsArray, isLoading } = useSelector(
    (state: RootState) => state.reviews,
  );

  if (isLoading || !reviewsArray) {
    return null;
  }

  return (
    reviewsArray && (
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true }}
        loop={true}
      >
        {reviewsArray.map((item: ReviewsType, index: number) => (
          <SwiperSlide
            key={item._id || index}
            className={styles.reviewsListItem}
          >
            <div className={styles.reviewsCurrent}>
              <div className={styles.reviewsPerson}>
                <img
                  className={styles.reviewsPersonImg}
                  width={60}
                  height={60}
                  src={item.image}
                  alt=''
                  aria-hidden
                />
                <div className={styles.person}>
                  <b className={styles.reviewsName}>{item.whoseReview}</b>
                  <span className={styles.reviewsSity}>{item.sity}</span>
                </div>
              </div>
              <p className={styles.reviewsDescription}>{item.description}</p>
              <button className={styles.reviewsBtn} type='button'>
                Прочитать весь отзыв
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
};
