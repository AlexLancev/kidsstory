import { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const BenefitsLoader: FC = () => {
  return (
    <li>
      <ContentLoader
        speed={2}
        width={450}
        height={82}
        viewBox='0 0 450 82'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
      >
        <rect x='0' y='0' rx='10' ry='10' width='76' height='76' />
        <rect x='100' y='20' rx='10' ry='10' width='300' height='40' />
      </ContentLoader>
    </li>
  );
};
