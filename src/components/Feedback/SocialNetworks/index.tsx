import { FC } from 'react';
import classNames from 'classnames';

import Whatsapp from 'assets/img/svg/whatsapp-icon.svg';
import Vk from 'assets/img/svg/vk-icon.svg';
import Telegram from 'assets/img/svg/telegram-icon.svg';

import styles from './SocialNetworks.module.css';

interface SocialNetworksProps {
  extraClass?: string;
}

export const SocialNetworks: FC<SocialNetworksProps> = ({ extraClass }) => {
  return (
    <ul
      className={classNames(styles.socialNetworksList, {
        [styles.extraClass]: extraClass,
      })}
    >
      <li className={styles.socialNetworksListItem}>
        <a
          className={styles.socialNetworksListItemLink}
          href='https://api.whatsapp.com/send/?phone=79362464167'
          title='Переход на внешний сайт Ватсап'
          target='_blank'
          style={{ backgroundImage: `url(${Whatsapp})` }}
        ></a>
      </li>
      <li className={styles.socialNetworksListItem}>
        <a
          className={styles.socialNetworksListItemLink}
          href='https://vk.com/club197953916'
          title='Переход на внешний сайт Вконтакте'
          target='_blank'
          style={{ backgroundImage: `url(${Vk})` }}
        ></a>
      </li>
      <li className={styles.socialNetworksListItem}>
        <a
          className={styles.socialNetworksListItemLink}
          href='https://t.me/kidsstory_club'
          title='Переход на внешний сайт Телеграм'
          target='_blank'
          style={{ backgroundImage: `url(${Telegram})` }}
        ></a>
      </li>
    </ul>
  );
};
