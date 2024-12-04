import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from 'store';
import { TeamsType } from 'types';
import { TeamsSlider } from 'components';

import styles from './TeamSlider.module.css';

SwiperCore.use([Navigation]);

export const TeamSlider: FC = () => {
  const currentSlide = 4;

  const { teamsArray, isLoading } = useSelector(
    (state: RootState) => state.teams,
  );

  return (
    teamsArray && (
      <div className='team'>
        <Swiper
          className={styles.teamSlider}
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={20}
          slidesPerView={currentSlide}
          loop
          // breakpoints={{
          //   1440: {
          //     spaceBetween: 50,
          //     slidesPerView: 2,
          //   },
          //   768: {
          //     spaceBetween: 20,
          //   },
          //   320: {
          //     spaceBetween: 10,
          //     slidesPerView: 1,
          //   },
          // }}
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
                    state={{ currentPage: item }}
                  >
                    <img
                      className={styles.teamSliderImg}
                      src={item.image}
                      height={319}
                      alt={item.title}
                      title={item.title}
                      loading='lazy'
                    />
                    <span className={styles.teamSliderInfo}>
                      <strong className={styles.teamSliderTeacherFamilyName}>
                        {item.title}
                      </strong>
                      <span className={styles.teamSliderTeacherSpeciality}>
                        {item.speciality}
                      </span>
                      <span>{item.experience}</span>
                    </span>
                  </Link>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    )
  );
};
