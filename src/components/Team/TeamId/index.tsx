import { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import xss from 'xss';

import { useGettingWindowWidth } from 'hooks/gettingWindowWidth';

import { AppDispatch, RootState, getTeamId } from 'store';

import { BreadCrumbs, BreadCrumbsI, TeamIdLoader, TeamIdLoaderMobile } from 'components';

import styles from './TeamId.module.css';

export const TeamId = () => {
  const [isOtherLoader, setIsOtherLoader] = useState<boolean>(false);
  const [whichLoader, setWhichLoader] = useState<ReactNode | null>(null);
  const { id } = useParams();
  const location = useLocation();
  const state = location.state as BreadCrumbsI | null;
  const dispatch = useDispatch<AppDispatch>();
  const { teamId, isLoading } = useSelector((state: RootState) => state.teamId);
  const innerWidtn = useGettingWindowWidth();

  useEffect(() => {
    if (innerWidtn < 485) {
      return setIsOtherLoader(true);
    }
    return () => setIsOtherLoader(false);
  }, [innerWidtn]);

  useEffect(() => {
    if (id) {
      dispatch(getTeamId(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    setWhichLoader(isOtherLoader ? <TeamIdLoaderMobile /> : <TeamIdLoader />);
  }, [isOtherLoader]);

  return (
    <section className={styles.teamId}>
      <div className='container'>
        <BreadCrumbs currentPage={state?.currentPage} />
        {isLoading || !teamId ? (
          whichLoader
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
