import React from 'react';
import { ReviewsType } from 'types/index';

import CloseBtnIcon from '../../assets/img/svg/closeBtn.svg?react';

import styles from './Modal.module.css';

interface ModalProps {
  review: ReviewsType;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ review, onClose }) => {
  const { whoseReview, description, sity, image } = review;

  return (
    <div className={styles.modal}>
      <div className={styles.modalReviewContent}>
        <button
          className={styles.modalCloseButton}
          onClick={onClose}
          title='Закрыть модальное окно'
        >
          <CloseBtnIcon width={35} height={35} />
        </button>
        <div className={styles.modalPerson}>
          <img
            className={styles.modalPersonImg}
            width={60}
            height={60}
            src={image}
            alt=''
            aria-hidden
          />
          <div className={styles.person}>
            <strong className={styles.modalName}>{whoseReview}</strong>
            <span className={styles.modalSity}>{sity}</span>
          </div>
        </div>
        <p className={styles.modalDescription}>{description}</p>
        <a className={styles.modalLink} href='!#' target='__blank' rel="noopener noreferrer">
          Источник
        </a>
      </div>
    </div>
  );
};
