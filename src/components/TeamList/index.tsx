import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/index';

import { TeamsType } from 'types/index';

import styles from './TeamList.module.css';

interface TeamListType {
  isSlider: boolean;
}

export const TeamList: React.FC<TeamListType> = ({isSlider}) => {
  const { teamsArray, isLoading } = useSelector(
    (state: RootState) => state.teams,
  );

  if (isLoading || !teamsArray) {
    return null;
  }

  return (
    teamsArray && (
      isSlider ? (<Swiper
        className={styles.teamsList}
        spaceBetween={50}
        slidesPerView={4}
        pagination={{ clickable: true }}
        loop={true}
      >
        {teamsArray.map((item: TeamsType, index: number) => (
          <SwiperSlide key={item._id || index} className={styles.teamsListItem}>
            <Link to={``} className={styles.teamsListLink}>
              <LazyLoadImage
                className={styles.teamsListImg}
                alt={item.nameTeacher}
                title={item.nameTeacher}
                height={278}
                src={item.image}
                placeholderSrc={item.imagePreview}
              />
              <div className={styles.teamsListInfo}>
                <b className={styles.teamsListTeacherFamilyName}>
                  {item.nameTeacher}
                </b>
                <span className={styles.teamsListTeacherSpeciality}>
                  {item.speciality}
                </span>
                <span className={styles.teamsListTeacherExperience}>
                  {item.experience}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>) : (<Link to={``} className={styles.teamsListLink}>
              <LazyLoadImage
                className={styles.teamsListImg}
                alt={item.nameTeacher}
                title={item.nameTeacher}
                height={278}
                src={item.image}
                placeholderSrc={item.imagePreview}
              />
              <div className={styles.teamsListInfo}>
                <b className={styles.teamsListTeacherFamilyName}>
                  {item.nameTeacher}
                </b>
                <span className={styles.teamsListTeacherSpeciality}>
                  {item.speciality}
                </span>
                <span className={styles.teamsListTeacherExperience}>
                  {item.experience}
                </span>
              </div>
            </Link>)
    )
  );
};
