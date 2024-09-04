import React from 'react';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

import { videoGalleryArray } from 'constans/videoGalleryArray';

import Play from './img/video-gallery/play.svg?react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/components/pagination/pagination.min.css';

import styles from './VideoGallery.module.css';

export const VideoGallery: React.FC = () => {
  return (
    videoGalleryArray && (
      <div className={`${styles.slide} slide-page`}>
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          pagination={{ clickable: true }}
          loop={true}
          centeredSlides={true}
          // autoplay={{ delay: 7000, disableOnInteraction: false }}
        >
          {videoGalleryArray.map((item, index: number) => (
            <SwiperSlide key={item.id || index}>
              <ReactPlayer
                controls={true}
                light={item.urlImage}
                url={item.urlVideo}
                playIcon={<Play width={96} />}
                playing
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};
