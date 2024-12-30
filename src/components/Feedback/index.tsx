import { SocialNetworks } from 'components';

import { ContactUs } from './ContactUs';

import styles from './Feedback.module.css';

export const Feedback = () => {
  return (
    <div className={styles.feedback}>
      <ContactUs />
      <SocialNetworks />
    </div>
  );
};
