import { FC } from 'react';
import ContentLoader from 'react-content-loader';

interface ServicesPageIdLoaderProps {
  extraClass: string;
}

export const ServicesPageIdLoader: FC<ServicesPageIdLoaderProps> = ({
  extraClass,
}) => {
  return (
    <ContentLoader
      className={extraClass}
      speed={2}
      height={800}
      viewBox='0 0 1390 800'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='10' ry='10' width='1390' height='400' />
      <rect x='0' y='420' rx='10' ry='10' width='450' height='50' />
      <rect x='0' y='490' rx='10' ry='10' width='1190' height='50' />
      <rect x='0' y='560' rx='10' ry='10' width='790' height='50' />
      <rect x='0' y='630' rx='10' ry='10' width='1120' height='50' />
    </ContentLoader>
  );
};
