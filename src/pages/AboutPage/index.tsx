import { useLocation } from 'react-router-dom';

import { VideoGallerySection } from 'pages/HomePage/VideoGallerySection';
import { Advantages } from 'pages/HomePage/Advantages';

import { BreadCrumbs, BreadCrumbsI } from 'components/BreadCrumbs';
import { RequestConsultationSection } from 'components/RequestConsultationSection';

import ReqConsSectWoMan1 from '../../components/RequestConsultationSection/img/RequestConsultation/item-3.webp';

import AboutPerson from './img/about-center/person.webp';

import styles from './AboutPage.module.css';

export const AboutPage = () => {
  const location = useLocation();
  const state = location.state as BreadCrumbsI | null;

  return (
    <>
      <BreadCrumbs currentPage={state?.currentPage} />
      <section className={styles.about}>
        <div className='container'>
          <h1 className={styles.aboutTitle}>О центре</h1>
          <div className={styles.aboutInner}>
            <img
              className={styles.aboutImgPerson}
              width={426}
              height={638}
              src={AboutPerson}
              alt='Руководитель
          Kids Story Бабкина Дарья Валерьевна'
              title='Руководитель
          Kids Story Бабкина Дарья Валерьевна'
            />
            <div className={styles.aboutInfo}>
              <h2 className={styles.aboutHead}>Руководитель Kids Story</h2>
              <b className={styles.aboutFamily}>Бабкина</b>
              <span className={styles.aboutName}>Дарья Валерьевна</span>
              <p className={styles.aboutText}>
                Мы рады Вас приветствовать в уникальном авторском
                образовательном пространстве «Kids story».
              </p>
              <p className={styles.aboutText}>
                В одном здании расположились: английский детский сад для детей с
                1 до 7 лет с погружением в языковую среду, собственной кухней,
                охраняемой огороженной территорией для организации прогулок, и
                соляной пещерой для сохранения и укрепления здоровья детей, и
                центр дополнительного образования для детей с 8 мес. до 18 лет,
                с возможностью получения платных образовательных услуг за
                рамками стандарта в удобном месте и по комфортному расписанию.
              </p>
              <p className={styles.aboutText}>
                Для того чтобы сделать каждый день ребенка познавательным,
                эмоционально наполненным яркими красками, наши опытные педагоги
                постоянно находятся в поиске новых форм и методов подачи
                материала, тем самым превращая занятия в увлекательную игру,
                которая дает почву для экспериментирования, фантазии и
                творчества.
              </p>
              <p className={styles.aboutText}>
                Вместе с детьми мы учимся говорить красиво и правильно на
                русском и английском языках, логически мыслить и разгадывать
                ребусы, танцевать и петь, рисовать и лепить, знакомиться с
                основами математики и грамматики, познавать мир вокруг себя. Мы
                погружаемся в удивительный мир ежедневных открытий.
              </p>
              <p className={styles.aboutText}>
                Детский сад «Kids story» — это качественное дошкольное
                образование для детей с 1 до 7 лет, основанное на любви к детям,
                учете индивидуальных особенностей каждого ребенка и семьи в
                целом, отвечающего современным трендам.
              </p>
              <p className={styles.aboutText}>
                Открывая двери нашего детского сада, дети попадают в атмосферу
                заботы и внимания квалифицированных педагогов, при этом мы
                всегда прислушиваемся к пожеланиям родителей наших
                воспитанников. Отличительной особенностью образовательного
                пространства «Kids story», является: «ежедневное развитие детей
                на 360 градусов»: уникальность содержания образовательной
                программы, ежедневные мероприятия (опыты и эксперименты,
                мастер-классы, игры-квесты, соревнования, концерты и спектакли,
                конференции и проекты), позволяют в дошкольном периоде выявить и
                раскрыть индивидуальные особенности, таланты, одаренность
                каждого ребенка, а также счастливо пройти один из самых важных
                периодов жизни человека — ДЕТСТВО.
              </p>
              <ul className={styles.aboutList}>
                <li className={styles.aboutListItem}>
                  *Детский сад и клуб дополнительного образования «Kids story»
                  имеет образовательную лицензию
                </li>
                <li className={styles.aboutListItem}>
                  * Услуги детского сада, и услуги дополнительного образования
                  (кружки, секции, индивидуальные занятия) можно оплатить из
                  средств материнского капитала.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <VideoGallerySection />
      <div className='container'>
        <Advantages />
      </div>
      <div className='big-container'>
        <RequestConsultationSection
          colorText={'#ffffff'}
          sectionBg={'#F3ACC8'}
          personImg={ReqConsSectWoMan1}
          classNameImg={'ReqConsSectWoMan1'}
        />
      </div>
    </>
  );
};
