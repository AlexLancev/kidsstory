import { FC } from 'react';
import ContentLoader from 'react-content-loader';

import styles from './LoaderReviewsItem.module.css';

interface LoaderReviewsType {
  backgroundColor?: string;
}

export const LoaderReviews: FC<LoaderReviewsType> = ({ backgroundColor }) => (
  <ContentLoader
    speed={2}
    width={567}
    height={346}
    viewBox='0 0 567 346'
    backgroundColor={backgroundColor || '#f3f3f3'}
    foregroundColor='#ecebeb'
    className={styles.LoaderReviewsItem}
  >
    <circle cx='45' cy='43' r='40' />
    <rect x='100' y='45' rx='10' ry='10' width='170' height='25' />
    <rect x='100' y='10' rx='10' ry='10' width='230' height='25' />
    <rect x='0' y='100' rx='10' ry='10' width='567' height='120' />
    <rect x='0' y='240' rx='10' ry='10' width='192' height='35' />
  </ContentLoader>
);
