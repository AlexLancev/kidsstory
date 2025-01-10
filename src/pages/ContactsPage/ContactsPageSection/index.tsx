import { ContactUs, SocialNetworks, Form } from 'components';

import styles from './ContactsPageSection.module.css';

export const ContactsPageSection = () => {
  return (
    <section className={styles.contactsPageSection}>
          <h1 className={styles.contactsPageSectionTitle}>Контакты</h1>
      <div className={styles.contactsPageSectionInner}>
        <div className={styles.contactsPageSectionItem}>
          <ContactUs extraClass={styles['contactUsList--mod']} />
          <SocialNetworks extraClass={styles['socialNetworksList--mod']} />
          <address className={styles.contactsPageSectionAddress}>
            Москва, ул. Муравская д.38, к.1 <br />
            ЖК Мир Митино М. Пятницкое шоссе
          </address>
        </div>
        <div className={styles.contactsPageSectionForm}>
          <strong className={styles.contactsPageSectionHead}>
            Запишитесь на персональную экскурсию
          </strong>
          <p className={styles.contactsPageSectionText}>
            Заполните форму и посмотрите детский сад вживую в удобное для вас время
          </p>
          <Form isVisibleName isVisiblePhone isVisibleMail isVisibleCooment />
        </div>
      </div>
    </section>
  );
};
