import { RequestConsultationSection } from 'components/RequestConsultationSection';

import { ServicesList } from 'components/ServicesList';

import ReqConsSectMan1 from 'components/RequestConsultationSection/img/RequestConsultation/item-1.webp';
import ReqConsSectMan2 from 'components/RequestConsultationSection/img/RequestConsultation/item-2.webp';

import { VideoGallery } from 'components/VideoGallery';
import { SimpleYandexMap } from 'components/MyMap';

import { AboutCenter } from './AboutCenter';
import { Advantages } from './Advantages';
import { Hero } from './Hero';
import { Benefits } from './Benefits';
import { Team } from './Team';
import { Reviews } from './Reviews';

// import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <RequestConsultationSection
        sectionBg={'#8081bd'}
        personImg={ReqConsSectMan1}
      />
      <ServicesList isIncludeImagePromo={false} />
      <VideoGallery />
      <Benefits />
      <Team />
      <RequestConsultationSection
        sectionBg={'#fff6d1'}
        personImg={ReqConsSectMan2}
      />
      <AboutCenter />
      <Reviews />
      {/* <SimpleYandexMap /> */}
    </>
  );
};
