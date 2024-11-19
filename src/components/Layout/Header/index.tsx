import { useState, useCallback, MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';

import { Menu } from 'components/Menu';
import { Feedback } from 'components/Feedback';

import Logo from 'assets/img/svg/logo.svg?react';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);

  const handleToggleMenu: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      setIsActiveMenu((prev) => !prev);
    }, []);

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerInner}>
          <NavLink to='/' title='Логотип детского сада Kids Story'>
            <Logo width={192} height={52} />
            <span className='visually-hidden'>
              Логотип детского сада Kids Story
            </span>
          </NavLink>
          <Menu isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu} />
          <Feedback />
          <button
            className={styles.burgerBtn}
            onClick={handleToggleMenu}
            type='button'
            title={isActiveMenu ? 'Закрыть меню сайта' : 'Открыть меню сайта'}
            aria-expanded={isActiveMenu}
          >
            <span className='visually-hidden'>
              {isActiveMenu ? 'Закрыть меню сайта' : 'Открыть меню сайта'}
            </span>
            btn
          </button>
        </div>
      </div>
    </header>
  );
};
