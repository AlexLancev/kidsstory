import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';

import { ServicesType } from 'types/api/services';

import styles from './ServicesList.module.css';

interface ServicesListProps {
  isIncludeImagePromo?: boolean;
}

export const ServicesList: React.FC<ServicesListProps> = ({
  isIncludeImagePromo = true,
}) => {
  const { servicesArray, isLoading } = useSelector(
    (state: RootState) => state.services,
  );

  if (isLoading || !servicesArray) {
    return null;
  }

  return (
    servicesArray && (
      <ul className={styles.servicesList}>
        {servicesArray.map((item: ServicesType, index) => (
          <li key={item._id || index} className={styles.servicesListItem}>
            {isIncludeImagePromo && (
              <img
                className={styles.imagePromo}
                src={item.imageBg}
                alt=''
                title=''
              />
            )}
            <Link className={styles.servicesListLink} to='!#'>
              <span
                className={styles.servicesListIcon}
                style={{ backgroundImage: `url(${item.icon})` }}
              ></span>
              <b className={styles.servicesListHead}>{item.title}</b>
            </Link>
          </li>
        ))}
      </ul>
    )
  );
};
