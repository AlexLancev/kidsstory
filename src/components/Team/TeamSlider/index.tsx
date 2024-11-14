import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/index';

import { TeamsType } from 'types/index';
import { TeamsSlider } from 'components/Loaders/TeamsSlider';

import styles from './TeamSlider.module.css';

SwiperCore.use([Navigation]);

export const TeamSlider: React.FC = () => {
  const currentSlide = 4;

  const { teamsArray, isLoading } = useSelector(
    (state: RootState) => state.teams,
  );

  return (
    teamsArray && (
      <div className='team'>
        <Swiper
          className={styles.teamSlider}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={currentSlide}
          loop={true}
        >
          {isLoading || !teamsArray
            ? Array.from({ length: currentSlide }).map((_, index: number) => (
                <TeamsSlider key={index} />
              ))
            : teamsArray.map((item: TeamsType, index: number) => (
                <SwiperSlide
                  key={item._id || index}
                  className={styles.teamSliderItem}
                >
                  <Link
                    to={`/team/${item._id}`}
                    className={styles.teamSliderLink}
                  >
                    <img
                      className={styles.teamSliderImg}
                      src={item.image}
                      height={319}
                      alt={item.nameTeacher}
                      title={item.nameTeacher}
                    />
                    <div className={styles.teamSliderInfo}>
                      <b className={styles.teamSliderTeacherFamilyName}>
                        {item.nameTeacher}
                      </b>
                      <span className={styles.teamSliderTeacherSpeciality}>
                        {item.speciality}
                      </span>
                      <span>{item.experience}</span>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    )
  );
};
