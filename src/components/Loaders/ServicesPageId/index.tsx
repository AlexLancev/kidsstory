import { FC } from 'react';
import ContentLoader from 'react-content-loader';

interface ServicesPageIdLoaderProps {
  extraClass: string;
}

export const ServicesPageIdLoader: FC<ServicesPageIdLoaderProps> = ({ extraClass }) => {
  return (
    <ContentLoader
      className={extraClass}
      speed={2}
      width={'100%'}
      height={700}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='10' ry='10' width='100%' height='400' />
      <rect x='0' y='420' rx='10' ry='10' width='100%' height='50' />
      <rect x='0' y='490' rx='10' ry='10' width='80%' height='50' />
      <rect x='0' y='560' rx='10' ry='10' width='70%' height='50' />
      <rect x='0' y='630' rx='10' ry='10' width='60%' height='50' />
    </ContentLoader>
  );
};
