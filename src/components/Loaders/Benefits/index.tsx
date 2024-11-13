import { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const BenefitsLoader: FC = () => {
  return (
    <li>
      <ContentLoader
        speed={2}
        width={'100%'}
        height={82}
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
      >
        <rect x='0' y='0' rx='10' ry='10' width='76' height='76' />
        <rect x='90' y='0' rx='10' ry='10' width='70%' height='76' />
      </ContentLoader>
    </li>
  );
};
