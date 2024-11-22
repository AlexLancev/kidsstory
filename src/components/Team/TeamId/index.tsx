import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import xss from 'xss';

import { AppDispatch, RootState } from 'store/index';
import { getTeamId } from 'store/team/teamSlice';

import { TeamIdLoader } from 'components/Loaders/TeamId';
import { BreadCrumbs, BreadCrumbsI } from 'components/BreadCrumbs';

import styles from './TeamId.module.css';

export const TeamId: FC = () => {
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
        {!teamId || isLoading ? (
          <TeamIdLoader />
        ) : (
          <div className={styles.teamIdInner}>
            <img
              className={styles.teamIdImg}
              src={`/${teamId.image}`}
              alt={teamId.title}
              title={teamId.title}
              loading='lazy'
            />
            <div className={styles.teamIdTeacherInfo}>
              <strong className={styles.teamIdSpeciality}>
                {teamId.speciality}
              </strong>
              <strong className={styles.teamIdNameTeacher}>
                {teamId.title}
              </strong>
              <span className={styles.teamIdExperience}>
                {teamId.experience}
              </span>
              <div
                className={styles.teamIdDescription}
                dangerouslySetInnerHTML={{ __html: xss(teamId.description) }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
