import { RequestConsultationSection, Team, KindergartenMap } from 'components';

import ReqConsSectMan1 from 'components/RequestConsultationSection/img/RequestConsultation/item-1.webp';
import ReqConsSectMan2 from 'components/RequestConsultationSection/img/RequestConsultation/item-2.webp';

import { ServicesSection } from 'pages';

import { AboutCenter } from './AboutCenter';
import { Advantages } from './Advantages';
import { Hero } from './Hero';
import { Benefits } from './Benefits';

import { ReviewsSection } from './ReviewsSection';
import { VideoGallerySection } from './VideoGallerySection';

export const HomePage = () => {
  return (
    <>
      <div className='big-container'>
        <Hero />
      </div>
      <div className='container'>
        <Advantages />
      </div>
      <div className='big-container'>
        <RequestConsultationSection
          colorText={'#ffffff'}
          sectionBg={'#8081bd'}
          personImg={ReqConsSectMan1}
          classNameImg={'ReqConsSectMan1'}
        />
      </div>
      <div className='container'>
        <ServicesSection />
      </div>
      {/* <VideoGallerySection /> */}
      <div className='container'>
        <Benefits />
      </div>
      <div className='big-container'>
        {/* <Team /> */}
        <RequestConsultationSection
          colorText={'#000000'}
          sectionBg={'#fff6d1'}
          personImg={ReqConsSectMan2}
          classNameImg={'ReqConsSectMan2'}
        />
      </div>
      <div className='container'>
        <AboutCenter />
      </div>
      <ReviewsSection />
      <KindergartenMap />
    </>
  );
};
