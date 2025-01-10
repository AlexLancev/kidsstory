import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'store';
import { TeamsSlider } from 'components';

import styles from './TeamList.module.css';

export const TeamList = () => {
  const { teamsArray, isLoading } = useSelector((state: RootState) => state.teams);

  return (
    <ul className={styles.teamList}>
      {isLoading || !teamsArray
        ? Array.from({ length: 12 }).map((_, index: number) => (
            <TeamsSlider isPageTeam key={index} />
          ))
        : teamsArray.map((item: TeamsType, index: number) => (
            <li className={styles.teamListItem} key={item._id ?? index}>
              <NavLink
                to={`/team/${item._id}`}
                state={{ currentPage: item }}
                className={styles.teamListLink}
              >
                <img
                  className={styles.teamListImg}
                  src={item.image}
                  width={325}
                  height={278}
                  alt={item.title}
                  title={item.title}
                  loading='lazy'
                />
                <span className={styles.teamListInfo}>
                  <strong className={styles.teamListTeacherFamilyName}>{item.title}</strong>
                  <span className={styles.teamListTeacherSpeciality}>{item.speciality}</span>
                  <span className={styles.teamListTeacherExperience}>{item.experience}</span>
                </span>
              </NavLink>
            </li>
          ))}
    </ul>
  );
};
