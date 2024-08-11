import React from 'react';

import Whatsapp from 'assets/img/svg/whatsapp-icon.svg';
import Vk from 'assets/img/svg/vk-icon.svg';
import Telegram from 'assets/img/svg/telegram-icon.svg';
import Phone from 'assets/img/svg/phone.svg';

import styles from './Feedback.module.css';

export const Feedback: React.FC = () => {
  return (
    <ul className={styles.feedbackList}>
      <li className={styles.feedbackListItem}>
        <a
          className={styles.feedbackListItemLink}
          href='tel:+79362464167'
          target='_blank'
          style={{ backgroundImage: Phone }}
        >
          +7 936 246 41 67
        </a>
      </li>
      <li className={styles.feedbackListItem}>
        <a
          className={styles.feedbackListItemLink}
          href='!#'
          title='Переход на внешний сайт Ватсап'
          target='_blank'
          style={{ backgroundImage: Whatsapp }}
        ></a>
      </li>
      <li className={styles.feedbackListItem}>
        <a
          className={styles.feedbackListItemLink}
          href='!#'
          title='Переход на внешний сайт Вконтакте'
          target='_blank'
          style={{ backgroundImage: Vk }}
        ></a>
      </li>
      <li className={styles.feedbackListItem}>
        <a
          className={styles.feedbackListItemLink}
          href='!#'
          title='Переход на внешний сайт Телеграм'
          target='_blank'
          style={{ backgroundImage: Telegram }}
        ></a>
      </li>
    </ul>
  );
};
