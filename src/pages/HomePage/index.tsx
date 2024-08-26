import { RequestConsultationSection } from 'components/RequestConsultationSection';

import ReqConsSectMan1 from 'components/RequestConsultationSection/img/RequestConsultation/item-1.webp';
import ReqConsSectMan2 from 'components/RequestConsultationSection/img/RequestConsultation/item-2.webp';

import { VideoGallery } from 'components/VideoGallery';
import { ServicesSection } from 'pages/HomePage/ServicesSection';
// import { SimpleYandexMap } from 'components/MyMap';

import { AboutCenter } from './AboutCenter';
import { Advantages } from './Advantages';
import { Hero } from './Hero';
import { Benefits } from './Benefits';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { VideoGallerySection } from './VideoGallerySection';

// import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <>
      <div className='big-container'>
        <Hero />
        <Advantages />
        <RequestConsultationSection
          colorText={'#ffffff'}
          sectionBg={'#8081bd'}
          personImg={ReqConsSectMan1}
          classNameImg={'ReqConsSectMan1'}
        />
        <ServicesSection />
      </div>
      <VideoGallerySection />
      <div className='big-container'>
        <Benefits />
        <Team isSlider />
        <RequestConsultationSection
          colorText={'#000000'}
          sectionBg={'#fff6d1'}
          personImg={ReqConsSectMan2}
          classNameImg={'ReqConsSectMan2'}
        />
        <AboutCenter />
        <Reviews />
        {/* <SimpleYandexMap /> */}
      </div>
    </>
  );
};
