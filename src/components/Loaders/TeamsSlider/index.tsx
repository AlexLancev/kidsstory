import { FC } from 'react';
import ContentLoader from 'react-content-loader';

interface TeamsSliderProps {
  isPageTeam?: boolean;
}

export const TeamsSlider: FC<TeamsSliderProps> = ({ isPageTeam }) => {
  return isPageTeam ? (
    <li>
      <ContentLoader
        speed={2}
        width={'100%'}
        height={455}
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
      >
        <rect x='0' y='0' rx='10' ry='10' width='100%' height='319' />
        <rect x='0' y='342' rx='10' ry='10' width='187' height='30' />
        <rect x='0' y='383' rx='10' ry='10' width='120' height='30' />
        <rect x='0' y='425' rx='10' ry='10' width='60' height='30' />
      </ContentLoader>
    </li>
  ) : (
    <ContentLoader
      speed={2}
      width={'100%'}
      height={460}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='10' ry='10' width='100%' height='319' />
      <rect x='0' y='342' rx='10' ry='10' width='187' height='30' />
      <rect x='0' y='383' rx='10' ry='10' width='120' height='30' />
      <rect x='0' y='425' rx='10' ry='10' width='60' height='30' />
    </ContentLoader>
  );
};
