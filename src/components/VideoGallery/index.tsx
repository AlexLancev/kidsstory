import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { videoGalleryArray } from 'constans/videoGalleryArray';

SwiperCore.use([Pagination, Autoplay]);

import Play from './img/video-gallery/play.svg?react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/components/pagination/pagination.min.css';

import styles from './VideoGallery.module.css';

export const VideoGallery = () => {
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
          breakpoints={{
            650: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {videoGalleryArray.map(({ id, urlVideo, urlImage }, index: number) => (
            <SwiperSlide key={id ?? index}>
              {activeVideo === index ? (
                <iframe
                  src={urlVideo}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                ></iframe>
              ) : (
                <>
                  <img src={urlImage} alt='' loading='lazy' aria-hidden />
                  <button
                    className={styles.prevBtn}
                    type='button'
                    onClick={() => handlePlayVideo(index)}
                    title='Воспроизвести видео'
                  >
                    <Play className={styles.prevImg} />
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
