import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Form } from 'components/Form';

import Slide2 from './img/hero/trip-around-world-bg.webp';

import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={`${styles.hero} hero`}>
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
              style={{ backgroundImage: `url(${Slide2})` }}
            ></div>
          </SwiperSlide>
        </Swiper>
        <div className={styles.heroForm}>
          <h2 className={styles.heroFormTitle}>Запишитесь на пробный день!</h2>
          <p className={styles.heroFormDescription}>
            В него входит 3-5 разовое питание, посещение соляной пещеры, игры,
            прогулки и занятия по расписанию!
          </p>
          <Form isVisibleName isVisiblePhone isVisibleMail />
        </div>
      </div>
    </section>
  );
};
