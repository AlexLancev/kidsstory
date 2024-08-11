import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Form } from 'components/Form';

import Slide1 from './img/hero/english-kindergarten-bg.webp';
import Slide2 from './img/hero/trip-around-world-bg.webp';

import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroInner}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
          >
            <SwiperSlide>
              <div
                className={styles.slideContent}
                style={{ backgroundImage: Slide1 }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={styles.slideContent}
                style={{ backgroundImage: Slide2 }}
              ></div>
            </SwiperSlide>
          </Swiper>
          <div className={styles.heroForm}>
            <h2 className={styles.heroFormTitle}>
              Запишитесь на пробный день!
            </h2>
            <p className={styles.heroFormDescription}>
              В него входит 3-5 разовое питание, посещение соляной пещеры, игры,
              прогулки и занятия по расписанию!
            </p>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};