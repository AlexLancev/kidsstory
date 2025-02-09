import { useState, useCallback, MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { bodyScroll } from 'utils/body-scroll';

import { useGettingWindowWidth } from 'hooks/gettingWindowWidth';

import { Menu, Feedback } from 'components';

import Logo from 'assets/img/svg/logo.svg?react';

import styles from './Header.module.css';

export const Header = () => {
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
  const windowWidth = useGettingWindowWidth();

  const handleToggleMenu: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setIsActiveMenu((prev) => !prev);
    bodyScroll.toggle();
  }, []);

  if (windowWidth > 1024) {
    bodyScroll.unLock();
  }

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerInner}>
          <NavLink to='/' title='Логотип детского сада Kids Story'>
            <Logo width={192} height={52} className={styles.logo} />
            <span className='visually-hidden'>Логотип детского сада Kids Story</span>
          </NavLink>
          <Menu isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu} />
          <Feedback />
          <button
            className={classNames(styles.burgerBtn, {
              ['burgerBtn--active']: isActiveMenu,
            })}
            onClick={handleToggleMenu}
            type='button'
            title={isActiveMenu ? 'Закрыть меню сайта' : 'Открыть меню сайта'}
            aria-expanded={isActiveMenu}
          >
            <span className='visually-hidden'>
              {isActiveMenu ? 'Закрыть меню сайта' : 'Открыть меню сайта'}
            </span>
            <div className='burger-container'>
              <div className='bar top'></div>
              <div className='bar mid'></div>
              <div className='bar bot'></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
