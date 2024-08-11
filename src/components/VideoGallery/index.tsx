import React, { useState, MouseEvent } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import Play from './img/video-gallery/play.png';

import styles from './VideoGallery.module.css';

export const VideoGallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
    const target = e.target as HTMLElement;

    if (target.closest('[data-btnPlay]')) setIsVisible(false);
  };

  return (
    <div className={styles.slide} onClick={handleClick}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div className={styles.slideVideo}>
            {isVisible ? (
              <>
                <img className={styles.slidePreviewImage} src='' alt='video' />
                <button
                  className={styles.slideBtn}
                  data-btnPlay
                  style={{ backgroundImage: `url(${Play})` }}
                  type='button'
                  title='Воспроизвести видео'
                ></button>
              </>
            ) : (
              <iframe
                className={styles.slideIframe}
                src='https://www.youtube.com/embed/wlN_3cu7Xe4?si=F-bgUTlXnxP8wnpX'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
