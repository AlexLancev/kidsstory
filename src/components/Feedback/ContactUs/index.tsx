import { FC } from 'react';
import classNames from 'classnames';

import Phone from '/img/svg/phone.svg';

import styles from './ContactUs.module.css';

interface ContactUsProps {
  extraClass?: string;
}

export const ContactUs: FC<ContactUsProps> = ({ extraClass = '' }) => {
  return (
    <ul
      className={classNames(styles.contactUsList, {
        [extraClass]: extraClass,
      })}
    >
      <li className={styles.contactUsListItem}>
        <a
          className={styles.contactUsListItemLink}
          style={{ backgroundImage: `url(${Phone})` }}
          href='tel:+79362464167'
          rel='noopener noreferrer'
          aria-label='Позвонить по номеру +7 936 246 41 67'
          title='Позвонить по номеру +7 936 246 41 67'
          target='_blank'
        >
          +7 936 246 41 67
        </a>
      </li>
    </ul>
  );
};
