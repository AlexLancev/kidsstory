import { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const TeamIdLoader: FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={'100%'}
      height={950}
      viewBox='0 0 1390 950'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='10' ry='10' width='422' height='530' />
      <rect x='472' y='0' rx='10' ry='10' width='813' height='45' />
      <rect x='472' y='68' rx='10' ry='10' width='220' height='32' />
      <rect x='472' y='112' rx='10' ry='10' width='100' height='32' />
      <rect x='472' y='210' rx='10' ry='10' width='913' height='60' />
      <rect x='472' y='288' rx='10' ry='10' width='513' height='60' />
      <rect x='472' y='367' rx='10' ry='10' width='713' height='60' />
      <rect x='472' y='447' rx='10' ry='10' width='613' height='60' />
    </ContentLoader>
  );
};
