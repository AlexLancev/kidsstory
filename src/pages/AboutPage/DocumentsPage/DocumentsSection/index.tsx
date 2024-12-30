import styles from './DocumentsSection.module.css';

export const DocumentsSection = () => {
  return (
    <section className={styles.documentsSection}>
      <div className='container'>
        <h1 className={styles.documentsSectionTitle}>Документы</h1>
        <ul className={styles.documentsSectionList}>
          <li className={styles.documentsSectionListItem}>
            <a
              className={styles.documentsSectionLink}
              href='files/programma-podgotovka-k-shkole.pdf'
              download='Программа_Подготовка_к_школе.pdf'
              title='Скачать Программу Подготовка к школе в формате PDF'
            >
              Программа Подготовка к школе
            </a>
          </li>
          <li className={styles.documentsSectionListItem}>
            <a
              className={styles.documentsSectionLink}
              href='files/programma-ot-rozhdeniya-do-shkoly.pdf'
              download='Программа_От_рождения_до_школы.pdf'
              title='Скачать Программу От рождения до школы в формате PDF'
            >
              Программа От рождения до школы
            </a>
          </li>
          <li className={styles.documentsSectionListItem}>
            <a
              className={styles.documentsSectionLink}
              href='files/reestrovaya_vypiska_ano_kids_stori.pdf'
              download='Реестровая_выписка_АНО_КИДС_СТОРИ.pdf'
              title='Скачать Реестровую выписку АНО КИДС СТОРИ в формате PDF'
            >
              Реестровая выписка АНО КИДС СТОРИ
            </a>
          </li>
          <li className={styles.documentsSectionListItem}>
            <a
              className={styles.documentsSectionLink}
              href='files/detskij-sad-kids-story.pdf'
              download='Презентация_детского_сада.pdf'
              title='Скачать Презентацию детского сада в формате PDF'
            >
              Презентация детского сада
            </a>
          </li>
          <li className={styles.documentsSectionListItem}>
            <a
              className={styles.documentsSectionLink}
              href='files/programma_razvitiya_kids_stori_na_sajt.pdf'
              download='Программа_развития.pdf'
              title='Скачать Программу развития в формате PDF'
            >
              Программа развития
            </a>
          </li>
          <li className={styles.documentsSectionListItem}>
            <a
              className={styles.documentsSectionLink}
              href='files/dogovor_na_doshkolnoe_obrazovanie_.pdf'
              download='Договор_на_дошкольное_образование.pdf'
              title='Скачать Договор на дошкольное образование в формате PDF'
            >
              Договор на дошкольное образование
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
