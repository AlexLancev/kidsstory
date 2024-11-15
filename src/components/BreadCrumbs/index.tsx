import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BreadCrumbs.module.css';

interface BreadCrumbsProps {
  from?: string;
  currentPage?: string;
  sourcePage?: string;
}

export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({
  from,
  currentPage,
  sourcePage,
}) => {
  return (
    <nav className={styles.breadCrumbs}>
      <ul className={styles.breadCrumbsList}>
        <li className={styles.breadCrumbsListItem}>
          <Link to='/' className={styles.breadCrumbsItemLink}>
            Главная страница
          </Link>
        </li>
        {from && sourcePage && (
          <li className={styles.breadCrumbsListItem}>
            <Link to={from} className={styles.breadCrumbsItemLink}>
              {sourcePage}
            </Link>
          </li>
        )}
        {currentPage && (
          <li className={styles.breadCrumbsListItem}>
            <span className={styles.breadCrumbsItemLink}>{currentPage}</span>
          </li>
        )}
      </ul>
    </nav>
  );
};
