import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'store';

import { useGettingWindowWidth } from 'hooks/gettingWindowWidth';

import { TeamsSlider } from 'components';
import { BtnVisibleAllList } from 'components';

import styles from './TeamList.module.css';

export const TeamList = () => {
  const { teamsArray, isLoading } = useSelector((state: RootState) => state.teams) as {
    teamsArray: TeamsType[];
    isLoading: boolean;
  };
  const addQuantity = 6;
  const numCards = teamsArray?.length ?? 0;
  const [visibleCount, setVisibleCount] = useState<number>(numCards);
  const windowSize = useGettingWindowWidth();

  useEffect(() => {
    setVisibleCount(windowSize <= 414 ? addQuantity : numCards);
  }, [numCards, windowSize]);

  return (
    <>
      <ul className={styles.teamList}>
        {isLoading || !teamsArray || teamsArray?.length === 0
          ? Array.from({ length: 12 }).map((_, index: number) => (
              <TeamsSlider isPageTeam key={index} />
            ))
          : teamsArray.slice(0, visibleCount).map((item, index: number) => (
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
      {visibleCount < numCards && <BtnVisibleAllList setVisibleCount={setVisibleCount} />}
    </>
  );
};
