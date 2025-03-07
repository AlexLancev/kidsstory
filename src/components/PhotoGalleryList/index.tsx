import { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';

import { bodyScroll } from 'utils/body-scroll';
import { photoGalleryArray } from 'constans/photoGalleryArray';

import styles from './PhotoGalleryList.module.css';

export const PhotoGalleryList = () => {
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [visibleBtn, setVisibleBtn] = useState<boolean>(true);
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleClick = () => {
    setVisibleBtn(false);
    setVisibleCount(photoGalleryArray.length);
  };

  const openPopup = (index: number) => {
    bodyScroll.lock();
    setIsPopup(true);
    setCurrentIndex(index);
  };

  const closePopup = () => {
    bodyScroll.unLock();
    setIsPopup(false);
    setCurrentIndex(null);
  };

  const toLeft = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! > 0 ? prev! - 1 : photoGalleryArray.length - 1));
    }
  };

  const toRight = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! < photoGalleryArray.length - 1 ? prev! + 1 : 0));
    }
  };

  const currentImage = currentIndex !== null ? photoGalleryArray[currentIndex].image : '';

  return (
    photoGalleryArray && (
      <>
        <ul className={styles.photoGalleryList}>
          {photoGalleryArray.slice(0, visibleCount).map(({ id, image }, index) => (
            <li className={styles.photoGalleryListItem} key={id ?? index}>
              <button
                className={styles.btn}
                type='button'
                onClick={() => openPopup(index)}
                title='Увеличить слайд'
              >
                <img
                  src={image}
                  className={styles.photoGallertImg}
                  alt=''
                  loading='lazy'
                  aria-hidden
                />
                <span className='visually-hidden'>Увеличить слайд</span>
              </button>
            </li>
          ))}
        </ul>
        {visibleBtn && (
          <button className={styles.photoGalleryBtn} type='button' onClick={handleClick}>
            Показать ещё
          </button>
        )}
        {isPopup && currentIndex !== null && (
          <div className={styles.modal}>
            <div className={styles.modalInner}>
              <button
                className={styles.arrow}
                type='button'
                onClick={toLeft}
                title='Предыдущий слайд'
              >
                <FaChevronCircleLeft className={styles.icon} />
                <span className='visually-hidden'>Предыдущий слайд</span>
              </button>
              <img
                src={currentImage}
                className={styles.modalImg}
                alt=''
                loading='lazy'
                aria-hidden
              />
              <button
                className={`${styles.arrow} ${styles.arrowRight}`}
                type='button'
                onClick={toRight}
                title='Следующий слайд'
              >
                <FaChevronCircleRight className={styles.icon} />
                <span className='visually-hidden'>Следующий слайд</span>
              </button>
              <button
                className={styles.close}
                type='button'
                onClick={closePopup}
                title='Закрыть слайд'
              >
                <IoIosCloseCircle />
                <span className='visually-hidden'>Закрыть слайд</span>
              </button>
            </div>
          </div>
        )}
      </>
    )
  );
};
