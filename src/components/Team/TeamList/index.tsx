import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
              <NavLink
                to={`/team/${item._id}`}
                state={{ currentPage: item }}
                className={styles.teamListLink}
              >
                <img
                  className={styles.teamListImg}
                  alt={item.title}
                  title={item.title}
                  width={325}
                  height={278}
                  src={item.image}
                />
                <div className={styles.teamListInfo}>
                  <b className={styles.teamListTeacherFamilyName}>
                    {item.title}
                  </b>
                  <span className={styles.teamListTeacherSpeciality}>
                    {item.speciality}
                  </span>
                  <span>{item.experience}</span>
                </div>
              </NavLink>
            </li>
          ))}
    </ul>
  );
};
