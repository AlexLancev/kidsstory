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
                width={450}
                height={330}
                src={item.imageBg}
                alt=''
                aria-hidden
              />
            )}
            <Link className={styles.servicesListLink} to={`/services/${item._id}`}>
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
