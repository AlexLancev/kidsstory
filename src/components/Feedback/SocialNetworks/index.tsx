import React from 'react';

import Whatsapp from 'assets/img/svg/whatsapp-icon.svg';
import Vk from 'assets/img/svg/vk-icon.svg';
import Telegram from 'assets/img/svg/telegram-icon.svg';

import styles from './SocialNetworks.module.css';

export const SocialNetworks: React.FC = () => {
  return (
    <ul className={styles.socialNetworksList}>
      <li className={styles.socialNetworksListItem}>
        <a
          className={styles.socialNetworksListItemLink}
          href='!#'
          title='Переход на внешний сайт Ватсап'
          target='_blank'
          style={{ backgroundImage: `url(${Whatsapp})` }}
        ></a>
      </li>
      <li className={styles.socialNetworksListItem}>
        <a
          className={styles.socialNetworksListItemLink}
          href='!#'
          title='Переход на внешний сайт Вконтакте'
          target='_blank'
          style={{ backgroundImage: `url(${Vk})` }}
        ></a>
      </li>
      <li className={styles.socialNetworksListItem}>
        <a
          className={styles.socialNetworksListItemLink}
          href='!#'
          title='Переход на внешний сайт Телеграм'
          target='_blank'
          style={{ backgroundImage: `url(${Telegram})` }}
        ></a>
      </li>
    </ul>
  );
};
