import { BreadCrumbs, KindergartenMap } from 'components';

import { ContactsPageSection } from './ContactsPageSection';

export const ContactsPage = () => {
  return (
    <>
      <div className='container'>
        <BreadCrumbs />
        <ContactsPageSection />
      </div>
      <KindergartenMap />
    </>
  );
};
