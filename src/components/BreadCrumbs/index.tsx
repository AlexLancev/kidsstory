import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { paths } from '../../paths';

import styles from './BreadCrumbs.module.css';

type BreadCrumbsType = {
  patchname: string;
  title: string;
};

export interface BreadCrumbsI {
  currentPage?: BreadCrumbsType;
}

const {
  aboutPage,
  programPage,
  dailyDietPage,
  pricePage,
  reviewsPage,
  servicesPage,
  teamPage,
  scheduleGroupPage,
  documentsPage,
  dailyRoutinePage,
  galleryPage,
  contactsPage,
} = paths;

const breadcrumbItems = [
  { patchName: aboutPage, text: 'О нас' },
  { patchName: programPage, text: 'Программа' },
  { patchName: dailyDietPage, text: 'Питание на 1 день' },
  { patchName: pricePage, text: 'Цены' },
  { patchName: reviewsPage, text: 'Отзывы' },
  { patchName: documentsPage, text: 'Документы' },
  { patchName: servicesPage, text: 'Занятия' },
  { patchName: scheduleGroupPage, text: 'Расписание групп' },
  { patchName: dailyRoutinePage, text: 'Режим дня на холодный период' },
  { patchName: galleryPage, text: 'Фото и видео' },
  { patchName: teamPage, text: 'Наша команда' },
  { patchName: contactsPage, text: 'Контакты' },
];

export const BreadCrumbs: FC<BreadCrumbsI> = ({ currentPage }) => {
  const location = useLocation();
  const patchName = currentPage?.patchname ?? location.pathname;

  const matchedBreadcrumb = {
    ...breadcrumbItems.find((obj) => obj.patchName === patchName),
    ...(currentPage?.title ? { name: currentPage.title } : {}),
  };

  if (!matchedBreadcrumb) {
    return null;
  }

  const { text, patchName: toPatch, name } = matchedBreadcrumb;

  return (
    <div className='container'>
      <nav className={styles.breadCrumbs}>
        <ul className={styles.breadCrumbsList}>
          <li className={styles.breadCrumbsListItem}>
            <Link to='/' className={styles.breadCrumbsItemLink}>
              Главная страница
            </Link>
          </li>
          {name && (
            <li className={styles.breadCrumbsListItem}>
              <Link to={toPatch ?? ''} className={styles.breadCrumbsItemLink}>
                {text}
              </Link>
            </li>
          )}
          <li className={styles.breadCrumbsListItem}>
            <span className={styles.breadCrumbsItemLink}>{name ?? text}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
