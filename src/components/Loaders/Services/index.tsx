import { FC } from 'react';
import ContentLoader from 'react-content-loader';

interface ServicesLoaderProps {
  isIncludeImagePromo: boolean | undefined;
}

export const ServicesLoader: FC<ServicesLoaderProps> = ({
  isIncludeImagePromo,
}) => {
  return isIncludeImagePromo ? (
    <ContentLoader
      speed={2}
      width={450}
      height={451}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='10' ry='10' width='450' height='330' />
      <rect x='0' y='350' rx='10' ry='10' width='95' height='90' />
      <rect x='110' y='350' rx='10' ry='10' width='330' height='90' />
    </ContentLoader>
  ) : (
    <ContentLoader
      speed={2}
      width={450}
      height={95}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='10' ry='10' width='95' height='90' />
      <rect x='110' y='0' rx='10' ry='10' width='330' height='90' />
    </ContentLoader>
  );
};
