import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';

import { ServicesLoader } from 'components/Loaders/Services';
import { ServicesType } from 'types/api/services';

import styles from './ServicesList.module.css';

interface ServicesListProps {
  isIncludeImagePromo?: boolean;
}

export const ServicesList: React.FC<ServicesListProps> = ({
  isIncludeImagePromo,
}) => {
  const { servicesArray, isLoading } = useSelector(
    (state: RootState) => state.services,
  );

  return (
    <ul className={styles.servicesList}>
      {isLoading || !servicesArray
        ? Array.from({ length: 19 }).map((_, index: number) => (
            <ServicesLoader
              isIncludeImagePromo={isIncludeImagePromo}
              key={index}
            />
          ))
        : servicesArray.map((item: ServicesType, index: number) => (
            <li key={item._id || index} className={styles.servicesListItem}>
              {isIncludeImagePromo && (
                <img
                  className={styles.imagePromo}
                  width={450}
                  height={330}
                  src={item.imageBg}
                  alt=''
                  loading='lazy'
                  aria-hidden
                />
              )}
              <Link
                className={styles.servicesListLink}
                to={`/services/${item._id}`}
                state={{ currentPage: item }}
              >
                <span
                  className={styles.servicesListIcon}
                  style={{ backgroundImage: `url(${item.icon})` }}
                ></span>
                <strong className={styles.servicesListHead}>
                  {item.title}
                </strong>
              </Link>
            </li>
          ))}
    </ul>
  );
};
