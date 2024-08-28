import React from 'react';

import ContentLoader from 'react-content-loader';

export const TeamLoader: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={392}
      height={289}
      viewBox='0 0 392 289'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='27' y='0' rx='0' ry='0' width='200' height='145' />
      <rect x='29' y='155' rx='0' ry='0' width='139' height='20' />
      <rect x='31' y='184' rx='0' ry='0' width='109' height='20' />
      <rect x='35' y='219' rx='0' ry='0' width='191' height='120' />
    </ContentLoader>
  );
};
