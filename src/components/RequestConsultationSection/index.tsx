import { Form } from 'components';

import styles from './RequestConsultationSection.module.css';

interface RequestConsultationProps {
  sectionBg: string;
  personImg: string;
  colorText: string;
  classNameImg: string;
}

export const RequestConsultationSection = ({
  sectionBg,
  personImg,
  colorText,
  classNameImg,
}: RequestConsultationProps) => {
  return (
    <section
      className={styles.requestConsultation}
      style={{ backgroundColor: sectionBg, color: colorText }}
    >
      <div className='container'>
        <div className={styles.requestConsultationInner}>
          <div className={styles.requestConsultationInfo}>
            <h2 className={styles.requestConsultationTitle}>
              Есть вопросы? Получите бесплатную консультацию
            </h2>
            <p className={styles.requestConsultationDescription}>
              Оставьте телефон и мы перезвоним и расскажем все подробности о филиале
            </p>
            <Form extraClass={styles.flex} isVisiblePhone />
          </div>
          <img
            className={`${styles.currentImg} ${classNameImg}`}
            src={personImg}
            alt=''
            loading='lazy'
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
};
