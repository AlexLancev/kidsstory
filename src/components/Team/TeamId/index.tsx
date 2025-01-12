import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import xss from 'xss';

import { AppDispatch, RootState, getTeamId } from 'store';

import { BreadCrumbs, BreadCrumbsI, TeamIdLoader } from 'components';

import styles from './TeamId.module.css';

export const TeamId = () => {
  const { id } = useParams();
  const location = useLocation();
  const state = location.state as BreadCrumbsI | null;
  const dispatch = useDispatch<AppDispatch>();
  const { teamId, isLoading } = useSelector((state: RootState) => state.teamId);

  useEffect(() => {
    if (id) {
      dispatch(getTeamId(id));
    }
  }, [dispatch, id]);

  return (
    <section className={styles.teamId}>
      <div className='container'>
        <BreadCrumbs currentPage={state?.currentPage} />
        {isLoading || !teamId ? (
          <TeamIdLoader />
        ) : (
          <>
            <div className={styles.teamIdInner}>
              <img
                className={styles.teamIdImg}
                src={`/${teamId.image}`}
                alt={teamId.title}
                title={teamId.title}
                loading='lazy'
              />
              <div className={styles.teamIdTeacherInfo}>
                <strong className={styles.teamIdSpeciality}>{teamId.speciality}</strong>
                <strong className={styles.teamIdNameTeacher}>{teamId.title}</strong>
                <span className={styles.teamIdExperience}>{teamId.experience}</span>
              </div>
            </div>
            <div
              className={styles.teamIdDescription}
              dangerouslySetInnerHTML={{ __html: xss(teamId.description) }}
            ></div>
          </>
        )}
      </div>
    </section>
  );
};
