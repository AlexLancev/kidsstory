import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { videoGalleryArray } from 'constans/videoGalleryArray';

SwiperCore.use([Pagination, Autoplay]);

import Play from './img/video-gallery/play.svg?react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/components/pagination/pagination.min.css';

import styles from './VideoGallery.module.css';

export const VideoGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleSlideChange = (swiper: SwiperCore) => {
    if (activeVideo !== swiper.realIndex) {
      setActiveVideo(null);
      swiper.autoplay.start();
    }
  };

  const handlePlayVideo = (index: number) => {
    setActiveVideo(index);
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  return (
    videoGalleryArray && (
      <div className={`${styles.slide} slide-page`}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={0}
          slidesPerView={3}
          pagination={{ clickable: true }}
          loop={true}
          centeredSlides={true}
          onSlideChange={handleSlideChange}
          // autoplay={{ delay: 7000, disableOnInteraction: false }}
        >
          {videoGalleryArray.map((item, index: number) => (
            <SwiperSlide key={item.id || index}>
              {activeVideo === index ? (
                <iframe
                  src={item.urlVideo}
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                ></iframe>
              ) : (
                <>
                  <img src={item.urlImage} alt='' aria-hidden />
                  <button
                    type='button'
                    onClick={() => handlePlayVideo(index)}
                    title='Воспроизвести видео'
                  >
                    <Play />
                    <span className='visually-hidden'>Воспроизвести видео</span>
                  </button>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};
