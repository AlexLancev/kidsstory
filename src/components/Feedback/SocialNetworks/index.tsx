import { FC } from 'react';
import classNames from 'classnames';

import Whatsapp from '/img/svg/whatsapp-icon.svg';
import Vk from '/img/svg/vk-icon.svg';
import Telegram from '/img/svg/telegram-icon.svg';

import styles from './SocialNetworks.module.css';

interface SocialNetworksProps {
  extraClass?: string;
}

export const SocialNetworks: FC<SocialNetworksProps> = ({ extraClass = '' }) => {
  return (
    <ul
      className={classNames(styles.socialNetworksList, {
        [extraClass]: extraClass,
      })}
    >
      <li className={styles.socialNetworksListItem}>
        <a
          className={styles.socialNetworksListItemLink}
          style={{ backgroundImage: `url(${Whatsapp})` }}
          href='https://api.whatsapp.com/send/?phone=79362464167'
          title='Переход на внешний сайт Ватсап'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='visually-hidden'>Переход на внешний сайт Ватсап</span>
        </a>
      </li>
      <li className={styles.socialNetworksListItem}>
        <a
          className={styles.socialNetworksListItemLink}
          style={{ backgroundImage: `url(${Vk})` }}
          href='https://vk.com/club197953916'
          title='Переход на внешний сайт Вконтакте'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='visually-hidden'>Переход на внешний сайт Вконтакте</span>
        </a>
      </li>
      <li className={styles.socialNetworksListItem}>
        <a
          className={styles.socialNetworksListItemLink}
          style={{ backgroundImage: `url(${Telegram})` }}
          href='https://t.me/kidsstory_club'
          title='Переход на внешний сайт Телеграм'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='visually-hidden'>Переход на внешний сайт Телеграм</span>
        </a>
      </li>
    </ul>
  );
};
