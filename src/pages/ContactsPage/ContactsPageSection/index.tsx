import React from 'react';

import { ContactUs } from 'components/Feedback/ContactUs';
import { SocialNetworks } from 'components/Feedback/SocialNetworks';
import { Form } from 'components/Form';

import styles from './ContactsPageSection.module.css';

export const ContactsPageSection: React.FC = () => {
  return (
    <section className={styles.contactsPageSection}>
      <div className={styles.contactsPageSectionInner}>
        <div className={styles.contactsPageSectionItem}>
          <h1 className={styles.contactsPageSectionTitle}>Контакты</h1>
          <ContactUs extraClass={styles['contactUsList--mod']} />
          <SocialNetworks extraClass={styles['socialNetworksList--mod']}/>
          <address className={styles.contactsPageSectionAddress}>
            Москва, ул. Муравская д.38, к.1 <br />
            ЖК Мир Митино М. Пятницкое шоссе
          </address>
        </div>
        <div className={styles.contactsPageSectionForm}>
          <b className={styles.contactsPageSectionHead}>
            Запишитесь на персональную экскурсию
          </b>
          <p className={styles.contactsPageSectionText}>
            Заполните форму и посмотрите детский сад вживую в удобное для вас
            время
          </p>
          <Form isVisibleName isVisiblePhone isVisibleMail isVisibleCooment />
        </div>
      </div>
    </section>
  );
};
