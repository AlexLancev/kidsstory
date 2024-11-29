import { FC } from 'react';

import { SocialNetworks } from 'components';

import { ContactUs } from './ContactUs';

import styles from './Feedback.module.css';

export const Feedback: FC = () => {
  return (
    <div className={styles.feedback}>
      <ContactUs />
      <SocialNetworks />
    </div>
  );
};
