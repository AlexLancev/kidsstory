import { KindergartenMap } from 'components/Map';
import { BreadCrumbs } from 'components/BreadCrumbs';

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
