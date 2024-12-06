import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { ServicesLoader } from 'components';
import { ServicesType } from 'types/api/services';

import styles from './ServicesList.module.css';

interface ServicesListProps {
  isIncludeImagePromo?: boolean;
}

export const ServicesList: FC<ServicesListProps> = ({
  isIncludeImagePromo,
}) => {
  const { servicesArray, isLoading } = useSelector(
    (state: RootState) => state.services,
  );

  const size = window.innerWidth;
  const numCards = servicesArray?.length ?? 0;
  const [visibleCount, setVisibleCount] = useState<number>(numCards);
  const [windowSize, setWindowSize] = useState<number>(size);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize < 768) {
      setVisibleCount(6);
    } else {
      setVisibleCount(numCards);
    }
  }, [windowSize, numCards]);

  if (isLoading || !servicesArray || servicesArray.length === 0) {
    return (
      <ul className={styles.servicesList}>
        {Array.from({ length: 28 }).map((_, index: number) => (
          <ServicesLoader
            isIncludeImagePromo={isIncludeImagePromo}
            key={index}
          />
        ))}
      </ul>
    );
  }

  return (
    <>
      <ul className={styles.servicesList}>
        {servicesArray
          .slice(0, visibleCount)
          .map((item: ServicesType, index: number) => (
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
      {visibleCount < numCards && (
        <button
          className={styles.btn}
          type='button'
          onClick={() => setVisibleCount((prev) => prev + 6)}
        >
          Показать ещё
        </button>
      )}
    </>
  );
};
