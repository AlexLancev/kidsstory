import { FC, MutableRefObject } from 'react';

import CloseBtnIcon from 'assets/img/svg/closeBtn.svg?react';

import styles from './Modal.module.css';

interface ModalProps {
  review: ReviewsType;
  modalRef?: MutableRefObject<HTMLDivElement | null> | null;
  btnCloseRef?: MutableRefObject<HTMLButtonElement | null> | null;
  innerTextRef?: MutableRefObject<HTMLParagraphElement | null> | null;
}

export const Modal: FC<ModalProps> = ({
  review: { whoseReview, sity, image, linkToReview },
  btnCloseRef,
  modalRef,
  innerTextRef,
}) => {
  return (
    <div className={styles.modal} ref={modalRef}>
      <div className={styles.modalReviewContent}>
        <button
          className={styles.modalCloseButton}
          ref={btnCloseRef}
          title='Закрыть модальное окно'
        >
          <span className='visually-hidden'>Закрыть модальное окно</span>
          <CloseBtnIcon className={styles.modalCloseIcon} width={35} />
        </button>
        <div className={styles.modalPerson}>
          <img
            className={styles.modalPersonImg}
            width={60}
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
        <p className={styles.modalDescription} ref={innerTextRef}></p>
        <a
          className={styles.modalLink}
          href={linkToReview}
          target='__blank'
          title='Открыть источник (Яндекс карты) в новой вкладке'
          aria-label='Открыть источник (Яндекс карты) в новой вкладке'
          rel='noopener noreferrer'
        >
          Источник
        </a>
      </div>
    </div>
  );
};
