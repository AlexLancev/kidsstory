import React, { useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { photoGalleryArray } from 'constans/photoGalleryArray';

import styles from './PhotoGalleryList.module.css';

export const PhotoGalleryList: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [visibleBtn, setVisibleBtn] = useState<boolean>(true);

  const handleClick = () => {
    setVisibleBtn(false);
    setVisibleCount(photoGalleryArray.length);
  };

  return (
    photoGalleryArray && (
      <>
        <ul className={styles.photoGalleryList}>
          {photoGalleryArray
            .slice(0, visibleCount)
            .map((item, index: number) => (
              <li
                className={styles.photoGalleryListItem}
                key={item.id || index}
              >
                <LazyLoadImage
                  className={styles.photoGallertImg}
                  alt=''
                  aria-hidden
                  src={item.image}
                  placeholderSrc={item.imagePreview}
                />
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
      </>
    )
  );
};
