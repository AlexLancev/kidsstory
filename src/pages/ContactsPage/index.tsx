import { KindergartenMap } from 'components/Map';

import { ContactsPageSection } from './ContactsPageSection';

export const ContactsPage = () => {
  return (
    <>
      <div className='container'>
        <ContactsPageSection />
      </div>
      <KindergartenMap />
    </>
  );
};
