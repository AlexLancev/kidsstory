import { FC } from 'react';

import CloseBtnIcon from 'assets/img/svg/closeBtn.svg?react';

import styles from './Modal.module.css';

interface ModalProps {
  review: ReviewsType;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ review, onClose }) => {
  const { whoseReview, description, sity, image, linkToReview } = review;

  return (
    <div className={styles.modal}>
      <div className={styles.modalReviewContent}>
        <button
          className={styles.modalCloseButton}
          onClick={onClose}
          title='Закрыть модальное окно'
        >
          <span className='visually-hidden'>Закрыть модальное окно</span>
          <CloseBtnIcon width={35} height={35} />
        </button>
        <div className={styles.modalPerson}>
          <img
            className={styles.modalPersonImg}
            width={60}
            height={60}
            src={image}
            alt=''
            loading='lazy'
            aria-hidden
          />
          <div className={styles.person}>
            <strong className={styles.modalName}>{whoseReview}</strong>
            <span className={styles.modalSity}>{sity}</span>
          </div>
        </div>
        <p className={styles.modalDescription}>{description}</p>
        <a
          className={styles.modalLink}
          href={linkToReview}
          target='__blank'
          title='Открыть источник (Яндекс карты) в новой вкладке'
          rel='noopener noreferrer'
        >
          Источник
        </a>
      </div>
    </div>
  );
};
