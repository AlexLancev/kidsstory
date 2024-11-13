import { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const AdvantagesLoader: FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={'100%'}
      height={95}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='10' ry='10' width='80' height='80' />
      <rect x='95' y='5' rx='10' ry='10' width='250' height='30' />
      <rect x='95' y='45' rx='10' ry='10' width='138' height='30' />
    </ContentLoader>
  );
};
