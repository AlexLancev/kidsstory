import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { AppDispatch, RootState } from 'store/index';
import { getServiceId } from 'store/service/serviceSlice';
import { ServicesPageIdLoader } from 'components/Loaders/ServicesPageId';
import { BreadCrumbs, BreadCrumbsI } from 'components/BreadCrumbs';

import styles from './ServicesPageId.module.css';

export const ServicesPageId: FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const state = location.state as BreadCrumbsI | null;
  const dispatch = useDispatch<AppDispatch>();
  const { serviceId, isLoading } = useSelector(
    (state: RootState) => state.serviceId,
  );

  useEffect(() => {
    if (id) {
      dispatch(getServiceId(id));
    }
  }, [dispatch, id]);

  return (
    <div className='container'>
      <BreadCrumbs currentPage={state?.currentPage} />
      {isLoading || !serviceId ? (
        <ServicesPageIdLoader extraClass={styles.servicesPageIdHero} />
      ) : (
        <div key={serviceId._id} className={styles.servicesPageId}>
          <div
            className={styles.servicesPageIdHero}
            style={{ backgroundImage: `url(/${serviceId.imageBg})` }}
          >
            <div className={styles.servicesPageIdType}>
              <span
                className={styles.servicesPageIdIcon}
                style={{ backgroundImage: `url(/${serviceId.icon})` }}
              ></span>
              <strong className={styles.servicesPageIdHead}>
                {serviceId.title}
              </strong>
            </div>
          </div>
          <div
            className={styles.servicesPageIdDescription}
            dangerouslySetInnerHTML={{ __html: serviceId.description }}
          ></div>
        </div>
      )}
    </div>
  );
};
