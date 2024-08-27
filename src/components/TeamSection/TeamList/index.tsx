import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { TeamsType } from 'types/index';

import styles from './TeamList.module.css';
import { TeamLoader } from './TeamLoader';

export const TeamList: React.FC = () => {
  const { teamsArray, isLoading } = useSelector(
    (state: RootState) => state.teams,
  );

  return (
    <ul className={styles.teamList}>
      {isLoading || !teamsArray
        ? Array.from({ length: 9 }).map((_, index: number) => (
            <TeamLoader key={index} />
          ))
        : teamsArray.map((item: TeamsType, index: number) => (
            <li className={styles.teamListItem} key={item._id || index}>
              <Link to={``} className={styles.teamListLink}>
                <LazyLoadImage
                  className={styles.teamListImg}
                  alt={item.nameTeacher}
                  title={item.nameTeacher}
                  height={278}
                  src={item.image}
                  placeholderSrc={item.imagePreview}
                />
                <div className={styles.teamListInfo}>
                  <b className={styles.teamListTeacherFamilyName}>
                    {item.nameTeacher}
                  </b>
                  <span className={styles.teamListTeacherSpeciality}>
                    {item.speciality}
                  </span>
                  <span className={styles.teamListTeacherExperience}>
                    {item.experience}
                  </span>
                </div>
              </Link>
            </li>
          ))}
    </ul>
  );
};
