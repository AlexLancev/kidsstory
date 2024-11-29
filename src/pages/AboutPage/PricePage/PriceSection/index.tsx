import { FC } from 'react';

import styles from './PriceSection.module.css';

export const PriceSection: FC = () => {
  return (
    <section className={styles.priceSection}>
      <div className='container'>
        <h1 className={styles.priceSectionTitle}>
          Цены на услуги детского сада
        </h1>

        <h2 className={styles.priceSectionSubtitle}>
          Адаптация без слез (7-14 дней)
        </h2>
        <strong className={styles.priceSectionPeriodOfTime}>1 неделя </strong>
        <ul className={styles.priceSectionList}>
          <li className={styles.priceSectionListItem}>
            Полный день (7:00-19:00): 15 000 руб.
          </li>
          <li className={styles.priceSectionListItem}>
            Неполный день (8:00-13:00): 13 000 руб
          </li>
        </ul>

        <h2 className={styles.priceSectionSubtitle}>Стоимость «Детский сад»</h2>
        <strong className={styles.priceSectionPeriodOfTime}>1 месяц</strong>
        <ul className={styles.priceSectionList}>
          <li className={styles.priceSectionListItem}>
            Полный день (7:00-19:00): 1-й месяц 77 000 руб., далее — 42 000 руб.
          </li>
          <li className={styles.priceSectionListItem}>
            Неполный день (8:00-13:00): 1-й месяц 67 000 руб., далее — 32 000
            руб.
          </li>
        </ul>

        <h2 className={styles.priceSectionSubtitle}>Дополнительные занятия</h2>
        <strong className={styles.priceSectionTypeOfActivity}>
          Групповые занятия
        </strong>
        <ul className={styles.priceSectionList}>
          <li className={styles.priceSectionListItem}>1 занятие — 900 руб.</li>
          <li className={styles.priceSectionListItem}>
            8 занятий (абонемент) — 6 000 руб.
          </li>
        </ul>
        <strong className={styles.priceSectionTypeOfActivity}>
          Индивидуальные занятия
        </strong>
        <ul className={styles.priceSectionList}>
          <li className={styles.priceSectionListItem}>30 минут — 1 200 руб.</li>
          <li className={styles.priceSectionListItem}>45 минут — 1 600 руб.</li>
          <li className={styles.priceSectionListItem}>60 минут — 2 000 руб.</li>
        </ul>

        <strong className={styles.priceSectionDirectionsSubscription}>
          Абонемент на 8 занятий действует на все направления.
        </strong>
      </div>
    </section>
  );
};
