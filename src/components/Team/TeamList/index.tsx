import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { TeamsType } from 'types/index';
import { TeamsSlider } from 'components/Loaders/TeamsSlider';

import styles from './TeamList.module.css';

export const TeamList: React.FC = () => {
  const { teamsArray, isLoading } = useSelector(
    (state: RootState) => state.teams,
  );

  return (
    <ul className={styles.teamList}>
      {isLoading || !teamsArray
        ? Array.from({ length: 12 }).map((_, index: number) => (
            <TeamsSlider isPageTeam key={index} />
          ))
        : teamsArray.map((item: TeamsType, index: number) => (
            <li className={styles.teamListItem} key={item._id || index}>
              <Link to={``} className={styles.teamListLink}>
                <img
                  className={styles.teamListImg}
                  alt={item.nameTeacher}
                  title={item.nameTeacher}
                  width={325}
                  height={278}
                  src={item.image}
                />
                <div className={styles.teamListInfo}>
                  <b className={styles.teamListTeacherFamilyName}>
                    {item.nameTeacher}
                  </b>
                  <span className={styles.teamListTeacherSpeciality}>
                    {item.speciality}
                  </span>
                  <span>{item.experience}</span>
                </div>
              </Link>
            </li>
          ))}
    </ul>
  );
};
