import React, { useState } from 'react';

import { bodyScroll } from 'utils/body-scroll';
import { photoGalleryArray } from 'constans/photoGalleryArray';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';

import styles from './PhotoGalleryList.module.css';

export const PhotoGalleryList: React.FC = () => {
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
      setCurrentIndex((prev) =>
        prev! > 0 ? prev! - 1 : photoGalleryArray.length - 1,
      );
    }
  };

  const toRight = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) =>
        prev! < photoGalleryArray.length - 1 ? prev! + 1 : 0,
      );
    }
  };

  const currentImage =
    currentIndex !== null ? photoGalleryArray[currentIndex].image : '';

  return (
    photoGalleryArray && (
      <>
        <ul className={styles.photoGalleryList}>
          {photoGalleryArray.slice(0, visibleCount).map((item, index) => (
            <li className={styles.photoGalleryListItem} key={item.id || index}>
              <button
                className={styles.btn}
                type='button'
                onClick={() => openPopup(index)}
              >
                <img
                  src={item.image}
                  className={styles.photoGallertImg}
                  alt=''
                  loading='lazy'
                  aria-hidden
                />
              </button>
            </li>
          ))}
        </ul>
        {visibleBtn && (
          <button
            className={styles.photoGalleryBtn}
            type='button'
            onClick={handleClick}
          >
            Показать ещё
          </button>
        )}
        {isPopup && currentIndex !== null && (
          <div className={styles.modal}>
            <div className={styles.modalInner}>
              <button className={styles.arrow} type='button' onClick={toLeft}>
                <FaChevronCircleLeft className={styles.icon} />
              </button>
              <img src={currentImage} alt='' loading='lazy' aria-hidden />
              <button
                className={`${styles.arrow} ${styles.arrowRight}`}
                type='button'
                onClick={toRight}
              >
                <FaChevronCircleRight className={styles.icon} />
              </button>
              <button
                className={styles.close}
                type='button'
                onClick={closePopup}
              >
                <IoIosCloseCircle />
              </button>
            </div>
          </div>
        )}
      </>
    )
  );
};
