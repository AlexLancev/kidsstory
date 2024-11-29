import { BreadCrumbs } from 'components';

import { TeamPageSection } from './TeamPageSection';

export const TeamPage = () => {
  return (
    <>
      <BreadCrumbs />
      <div className='container'>
        <TeamPageSection />
      </div>
    </>
  );
};
