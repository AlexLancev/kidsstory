import { BreadCrumbs, KindergartenMap } from 'components';

import { ContactsPageSection } from './ContactsPageSection';

export const ContactsPage = () => {
  return (
    <>
      <BreadCrumbs />
      <div className='container'>
        <ContactsPageSection />
      </div>
      <KindergartenMap />
    </>
  );
};
