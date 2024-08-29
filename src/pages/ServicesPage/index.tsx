import { ServicesList } from 'components/ServicesList';

import { Advantages } from 'pages/HomePage/Advantages';

import { RequestConsultationSection } from 'components/RequestConsultationSection';

import ReqConsSectMan1 from '../../components/RequestConsultationSection/img/RequestConsultation/item-1.webp';

import styles from './ServicesPage.module.css';

export const ServicesPage = () => {
  return (
    <>
      <section className={styles.servicesPage}>
        <div className='container'>
          <h1 className={styles.servicesPageTitle}>Дополнительные услуги</h1>
          <ServicesList />
        </div>
      </section>
      <div className='container'>
        <Advantages />
      </div>
      <div className='big-container'>
        <RequestConsultationSection
          colorText={'#ffffff'}
          sectionBg={'#79BC6D'}
          personImg={ReqConsSectMan1}
          classNameImg={'ReqConsSectMan1'}
        />
      </div>
    </>
  );
};
