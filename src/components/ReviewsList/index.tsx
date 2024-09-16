import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'store/index';

import { Modal } from 'components/Modal';

import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewsType } from 'types/index';
import { bodyScroll } from 'utils/body-scroll';

import styles from './ReviewsList.module.css';

export const ReviewsList: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentReview, setCurrentReview] = useState<ReviewsType | null>(null);
  const { reviewsArray, isLoading } = useSelector(
    (state: RootState) => state.reviews,
  );

  const handleClick = (item: ReviewsType) => {
    setCurrentReview(item);
    setIsModalVisible(true);
    bodyScroll.lock();
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setCurrentReview(null);
    bodyScroll.unLock();
  };

  if (isLoading || !reviewsArray) {
    return null;
  }

  const renderReviewItem = (item: ReviewsType) => {
    return (
      <li className={styles.reviewsCurrent} key={item._id}>
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
            <strong className={styles.reviewsName}>{item.whoseReview}</strong>
            <span className={styles.reviewsSity}>{item.sity}</span>
          </div>
        </div>
        <p className={styles.reviewsDescription}>{item.description}</p>
        <button
          className={styles.reviewsBtn}
          type='button'
          onClick={() => handleClick(item)}
        >
          Прочитать весь отзыв
        </button>
        {isModalVisible && currentReview && (
          <Modal review={currentReview} onClose={handleCloseModal} />
        )}
      </li>
    );
  };

  return isLoading ? (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      pagination={{ clickable: true }}
      loop
    >
      {reviewsArray.map((item: ReviewsType, index: number) => (
        <SwiperSlide key={item._id || index} className={styles.reviewsListItem}>
          {renderReviewItem(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <ul className={styles.reviewsList}>
      {isLoading || !reviewsArray
        ? Array.from({ length: reviewsArray.length }).map(
            (_, index: number) => {
              return <i key={index}></i>;
            },
          )
        : reviewsArray.map((item) => renderReviewItem(item))}
    </ul>
  );
};
