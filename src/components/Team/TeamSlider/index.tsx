import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useGettingWindowWidth } from 'hooks/gettingWindowWidth';
import { RootState } from 'store';
import { TeamsSlider } from 'components';

import styles from './TeamSlider.module.css';

SwiperCore.use([Navigation]);

export const TeamSlider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(4);
  const { teamsArray, isLoading } = useSelector((state: RootState) => state.teams);
  const windowWidth = useGettingWindowWidth();

  useEffect(() => {
    const getSlidesPerView = (width: number): number => {
      if (width < 426) return 1;
      if (width < 768) return 2;
      if (width < 1240) return 3;
      return 4;
    };

    setCurrentSlide(getSlidesPerView(windowWidth));
  }, [windowWidth]);

  return (
    <div className='team'>
      <Swiper
        className={styles.teamSlider}
        pagination={{ clickable: true, dynamicBullets: true }}
        spaceBetween={20}
        slidesPerView={currentSlide}
        loop
        breakpoints={{
          1240: {
            spaceBetween: 30,
          },
          768: {
            spaceBetween: 20,
          },
          426: {
            spaceBetween: 10,
          },
        }}
      >
        {isLoading || !teamsArray || teamsArray.length === 0
          ? Array.from({ length: currentSlide }).map((_, index) => (
              <SwiperSlide key={`loader-${index}`} className={styles.teamSliderItem}>
                <TeamsSlider />
              </SwiperSlide>
            ))
          : teamsArray.map((item, index) => (
              <SwiperSlide key={item._id ?? index} className={styles.teamSliderItem}>
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
                    <strong className={styles.teamSliderTeacherFamilyName}>{item.title}</strong>
                    <span className={styles.teamSliderTeacherSpeciality}>{item.speciality}</span>
                    <span>{item.experience}</span>
                  </span>
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};
