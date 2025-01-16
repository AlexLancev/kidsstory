import ContentLoader from 'react-content-loader';

export const TeamIdLoaderMobile = () => {
  return (
    <ContentLoader
      speed={2}
      width={'100%'}
      height={660}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='10' ry='10' width='100%' height='360' />
      <rect x='0' y='380' rx='10' ry='10' width='200' height='25' />
      <rect x='0' y='415' rx='10' ry='10' width='150' height='25' />
      <rect x='0' y='450' rx='10' ry='10' width='100' height='25' />
      <rect x='0' y='520' rx='10' ry='10' width='100%' height='35' />
      <rect x='0' y='570' rx='10' ry='10' width='80%' height='35' />
      <rect x='0' y='620' rx='10' ry='10' width='100%' height='35' />
    </ContentLoader>
  );
};
