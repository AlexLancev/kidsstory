import { BreadCrumbs } from 'components/BreadCrumbs';

import { TeamPageSection } from './TeamPageSection';

// import styles from './TeamPage.module.css';

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
