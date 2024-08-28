import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/index';

import { TeamsType } from 'types/index';

// import 'swiper/swiper-bundle.min.css';
// import 'swiper/components/pagination/pagination.min.css';

import styles from './TeamSlider.module.css';

SwiperCore.use([Navigation]);

export const TeamSlider: React.FC = () => {
  const { teamsArray, isLoading } = useSelector(
    (state: RootState) => state.teams,
  );

  if (isLoading || !teamsArray) {
    return null;
  }

  return (
    teamsArray && (
      <div className={styles.slider}>
        <Swiper
          className={styles.teamSlider}
          navigation
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
        >
          {teamsArray.map((item: TeamsType, index: number) => (
            <SwiperSlide
              key={item._id || index}
              className={styles.teamSliderItem}
            >
              <Link to={``} className={styles.teamSliderLink}>
                <LazyLoadImage
                  className={styles.teamSliderImg}
                  alt={item.nameTeacher}
                  title={item.nameTeacher}
                  height={278}
                  src={item.image}
                  placeholderSrc={item.imagePreview}
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
