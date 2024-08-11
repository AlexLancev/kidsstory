import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.css';

export const Menu: React.FC = () => {
  return (
    <nav className={styles.nav} aria-label='Главное меню сайта'>
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to='/'>
            О нас
          </NavLink>
          <ul className={styles.navSubmenuList}>
            <li className={styles.navSubmenuListItem}>
              <NavLink className={styles.navSubmenuItemLink} to='/'>
                Программа
              </NavLink>
            </li>
            <li className={styles.navSubmenuListItem}>
              <NavLink className={styles.navSubmenuItemLink} to='/'>
                Питание на 1 день
              </NavLink>
            </li>
            <li className={styles.navSubmenuListItem}>
              <NavLink className={styles.navSubmenuItemLink} to='/'>
                Цены
              </NavLink>
            </li>
            <li className={styles.navSubmenuListItem}>
              <NavLink className={styles.navSubmenuItemLink} to='/'>
                Отзывы
              </NavLink>
            </li>
            <li className={styles.navSubmenuListItem}>
              <NavLink className={styles.navSubmenuItemLink} to='/'>
                Документы
              </NavLink>
            </li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to='/'>
            Занятия
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to='/'>
            Расписание
          </NavLink>
          <ul className={styles.navSubmenuList}>
            <li className={styles.navSubmenuListItem}>
              <NavLink className={styles.navSubmenuItemLink} to='/'>
                Расписание групп
              </NavLink>
            </li>
            <li className={styles.navSubmenuListItem}>
              <NavLink className={styles.navSubmenuItemLink} to='/'>
                Режим дня на холодный период
              </NavLink>
            </li>
            <li className={styles.navSubmenuListItem}>
              <NavLink className={styles.navSubmenuItemLink} to='/'>
                Расписание дополнительных занятий
              </NavLink>
            </li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to='/'>
            Фото и видео
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to='/'>
            Команда
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink className={styles.itemLink} to='/'>
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
