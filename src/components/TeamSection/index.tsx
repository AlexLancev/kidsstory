import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/index';

import { TeamsType } from 'types/index';

import { TeamList } from './TeamList';

import styles from './TeamSection.module.css';
import { TeamPageSection } from 'pages/TeamPage/TeamPageSection';

interface TeamSectionType {
  isSlider: boolean;
}

export const TeamSection: React.FC<TeamSectionType> = ({ isSlider }) => {
  const { teamsArray, isLoading } = useSelector(
    (state: RootState) => state.teams,
  );

  if (isLoading || !teamsArray) {
    return null;
  }

  return (
    teamsArray &&
    (isSlider ? (
      <Swiper
        className={styles.teamSection}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
      >
        {teamsArray.map((item: TeamsType, index: number) => (
          <SwiperSlide
            key={item._id || index}
            className={styles.teamSectionItem}
          >
            <Link to={``} className={styles.teamSectionLink}>
              <LazyLoadImage
                className={styles.teamSectionImg}
                alt={item.nameTeacher}
                title={item.nameTeacher}
                height={278}
                src={item.image}
                placeholderSrc={item.imagePreview}
              />
              <div className={styles.teamSectionInfo}>
                <b className={styles.teamSectionTeacherFamilyName}>
                  {item.nameTeacher}
                </b>
                <span className={styles.teamSectionTeacherSpeciality}>
                  {item.speciality}
                </span>
                <span>{item.experience}</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (
      <TeamPageSection />
    ))
  );
};
