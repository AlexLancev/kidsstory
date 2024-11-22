import React, { useState, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Modal } from 'components/Modal';
import { LoaderReviews } from 'components/Loaders/LoaderReviews';
import { bodyScroll } from 'utils/body-scroll';

import { ReviewsType } from 'types/index';

import styles from './ReviewsList.module.css';

interface ReviewsListType {
  isSlider?: boolean;
  extraClass?: string;
}

export const ReviewsList: React.FC<ReviewsListType> = React.memo(
  ({ isSlider = false, extraClass = '' }) => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [currentReview, setCurrentReview] = useState<ReviewsType | null>(
      null,
    );
    const { reviewsArray, isLoading } = useSelector(
      (state: RootState) => state.reviews,
    );

    const handleClick = useCallback((review: ReviewsType) => {
      setCurrentReview(review);
      setIsModalVisible(true);
      bodyScroll.lock();
    }, []);

    const handleCloseModal = useCallback(() => {
      setIsModalVisible(false);
      setCurrentReview(null);
      bodyScroll.unLock();
    }, []);

    const renderReviewItem = useCallback(
      (itemReview: ReviewsType) => (
        <li
          className={`${styles.reviewsCurrent} ${extraClass}`}
          key={itemReview._id}
        >
          <div className={styles.reviewsPerson}>
            <img
              className={styles.reviewsPersonImg}
              width={60}
              height={60}
              src={itemReview.image}
              alt=''
              loading='lazy'
              aria-hidden
            />
            <div className={styles.person}>
              <strong className={styles.reviewsName}>
                {itemReview.whoseReview}
              </strong>
              <span className={styles.reviewsSity}>{itemReview.sity}</span>
            </div>
          </div>
          <p className={styles.reviewsDescription}>{itemReview.description}</p>
          <button
            className={styles.reviewsBtn}
            type='button'
            onClick={() => handleClick(itemReview)}
          >
            Прочитать весь отзыв
          </button>
        </li>
      ),
      [extraClass, handleClick],
    );

    const reviewItems = useMemo(
      () => reviewsArray?.map((itemReview) => renderReviewItem(itemReview)),
      [reviewsArray, renderReviewItem],
    );

    if (isSlider) {
      return (
        <>
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            pagination={{ clickable: true }}
            loop
          >
            {isLoading || !reviewsArray || reviewsArray.length === 0
              ? Array.from({ length: 13 }).map((_, index) => (
                  <SwiperSlide key={index} className={styles.reviewsListItem}>
                    <LoaderReviews backgroundColor='#FFFFFF' />
                  </SwiperSlide>
                ))
              : reviewItems?.map((itemReview, index) => (
                  <SwiperSlide
                    key={itemReview?.key || index}
                    className={styles.reviewsListItem}
                  >
                    <ul className={styles.reviewsList}>{itemReview}</ul>
                  </SwiperSlide>
                ))}
          </Swiper>
          {isModalVisible && currentReview && (
            <Modal review={currentReview} onClose={handleCloseModal} />
          )}
        </>
      );
    }

    if (isLoading || reviewsArray?.length === 0) {
      return (
        <ul className={styles.reviewsList}>
          {Array.from({ length: 13 }).map((_, index: number) => (
            <LoaderReviews key={index} />
          ))}
        </ul>
      );
    }

    return (
      <>
        <ul className={styles.reviewsList}>{reviewItems}</ul>
        {isModalVisible && currentReview && (
          <Modal review={currentReview} onClose={handleCloseModal} />
        )}
      </>
    );
  },
);
