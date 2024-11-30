import { FC } from 'react';
import classNames from 'classnames';

import Phone from 'assets/img/svg/phone.svg';

import styles from './ContactUs.module.css';

interface ContactUsProps {
  extraClass?: string;
}

export const ContactUs: FC<ContactUsProps> = ({ extraClass }) => {
  return (
    <ul
      className={classNames(styles.contactUsList, {
        [styles.extraClass]: extraClass,
      })}
    >
      <li className={styles.contactUsListItem}>
        <a
          className={styles.contactUsListItemLink}
          href='tel:+79362464167'
          target='_blank'
          style={{ backgroundImage: `url(${Phone})` }}
        >
          +7 936 246 41 67
        </a>
      </li>
    </ul>
  );
};
