import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import xss from 'xss';

import { AppDispatch, RootState } from 'store/index';
import { getTeamId } from 'store/team/teamSlice';

import { TeamIdLoader } from 'components/Loaders/TeamId';

import styles from './TeamId.module.css';

export const TeamId: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { teamId, isLoading } = useSelector((state: RootState) => state.teamId);

  useEffect(() => {
    if (id) {
      dispatch(getTeamId(id));
    }
  }, [dispatch, id]);

  return (
    <section className={styles.teamId}>
      <div className='container'>
        {!teamId || isLoading ? (
          <TeamIdLoader />
        ) : (
          <div className={styles.teamIdInner}>
            <img
              className={styles.teamIdImg}
              src={`/${teamId.image}`}
              alt={teamId.nameTeacher}
              title={teamId.nameTeacher}
            />
            <div className={styles.teamIdTeacherInfo}>
              <strong className={styles.teamIdSpeciality}>
                {teamId.speciality}
              </strong>
              <strong className={styles.teamIdNameTeacher}>
                {teamId.nameTeacher}
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
