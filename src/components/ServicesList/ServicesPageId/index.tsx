import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AppDispatch, RootState } from 'store/index';
import { getServiceId } from 'store/service/serviceSlice';

// import styles from './ServicesPageId.module.css';

export const ServicesPageId: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { serviceId, isLoading } = useSelector(
    (state: RootState) => state.serviceId,
  );
  React.useEffect(() => {
    if (id) {
      dispatch(getServiceId(id));
    }
  }, [dispatch, id]);

  if (isLoading || !serviceId) {
    return null;
  }

  return <h1>hello</h1>;
};
