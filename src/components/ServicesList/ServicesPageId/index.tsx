import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AppDispatch, RootState } from 'store/index';
import { getServiceId } from 'store/service/serviceSlice';

import styles from './ServicesPageId.module.css';

export const ServicesPageId: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { serviceId, isLoading } = useSelector(
    (state: RootState) => state.serviceId,
  );

  useEffect(() => {
    if (id) {
      dispatch(getServiceId(id));
    }
  }, [dispatch, id]);

  if (isLoading || !serviceId) {
    return null;
  }

  const { _id, imageBg, icon, title, description } = serviceId;

  return (
    <div className='container'>
      <div key={_id} className={styles.servicesPageId}>
        <div
          className={styles.servicesPageIdHero}
          style={{ backgroundImage: `url(/${imageBg})` }}
        >
          <div className={styles.servicesPageIdType}>
            <span
              className={styles.servicesPageIdIcon}
              style={{ backgroundImage: `url(/${icon})` }}
            ></span>
            <strong className={styles.servicesPageIdHead}>{title}</strong>
          </div>
        </div>
        <div
          className={styles.servicesPageIdDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  );
};
