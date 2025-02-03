import { BreadCrumbs } from 'components';

import { TeamPageSection } from './TeamPageSection';

export const TeamPage = () => {
  return (
    <>
      <div className='container'>
        <BreadCrumbs />
        <TeamPageSection />
      </div>
    </>
  );
};
