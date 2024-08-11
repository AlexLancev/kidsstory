import styles from './RequestConsultationSection.module.css';

interface RequestConsultationProps {
  sectionBg: string;
  personImg: string;
}

export const RequestConsultationSection = ({
  sectionBg,
  personImg,
}: RequestConsultationProps) => {
  return (
    <section
      className={styles.requestConsultation}
      style={{ backgroundColor: sectionBg }}
    >
      <div className={styles.requestConsultationInner}>
        <div className={styles.requestConsultationInfo}>
          <h2 className={styles.requestConsultationTitle}>
            Есть вопросы? Получите бесплатную консультацию
          </h2>
          <p className={styles.requestConsultationDescription}>
            Оставьте телефон и мы перезвоним и расскажем все подробности о
            филиале
          </p>
        </div>
        <img
          className={styles.requestConsultationImg}
          src={personImg}
          width={812}
          height={708}
          aria-hidden={true}
          alt=''
        />
      </div>
    </section>
  );
};
