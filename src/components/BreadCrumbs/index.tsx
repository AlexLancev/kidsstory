import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { MenuItems } from 'constans/MenuItems';

import styles from './BreadCrumbs.module.css';

type BreadCrumbsType = {
  patchname: string;
  title: string;
};

export interface BreadCrumbsI {
  currentPage?: BreadCrumbsType;
}

export const BreadCrumbs: FC<BreadCrumbsI> = ({ currentPage }) => {
  const location = useLocation();
  const patch = currentPage?.patchname ?? location.pathname;

  const matchedGroup = MenuItems.find((group) =>
    group.some(({ patchName }) => patchName === patch),
  );

  const matchedBreadcrumb = matchedGroup?.find(({ patchName }) => patchName === patch);

  if (!matchedBreadcrumb) {
    return null;
  }

  const {
    text,
    patchName: toPatch,
    name,
  } = {
    ...matchedBreadcrumb,
    ...(currentPage?.title ? { name: currentPage.title } : {}),
  };

  return (
    <nav className={styles.breadCrumbs}>
      <ul className={styles.breadCrumbsList}>
        <li className={styles.breadCrumbsListItem}>
          <Link to='/' className={styles.breadCrumbsItemLink}>
            Главная страница
          </Link>
        </li>
        {name && (
          <li className={styles.breadCrumbsListItem}>
            <Link to={toPatch} className={styles.breadCrumbsItemLink}>
              {text}
            </Link>
          </li>
        )}
        <li className={styles.breadCrumbsListItem}>
          <span className={styles.breadCrumbsItemLink}>{name ?? text}</span>
        </li>
      </ul>
    </nav>
  );
};
