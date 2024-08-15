import React from 'react';

import { SocialNetworks } from 'components/Feedback/SocialNetworks';

import { ContactUs } from './ContactUs';

import styles from './Feedback.module.css';

export const Feedback: React.FC = () => {
  return (
    <div className={styles.feedback}>
      <ContactUs />
      <SocialNetworks />
    </div>
  );
};
