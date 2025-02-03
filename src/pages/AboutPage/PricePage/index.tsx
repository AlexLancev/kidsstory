import { useLocation } from 'react-router-dom';

import { BreadCrumbs, BreadCrumbsI, RequestConsultationSection } from 'components';

import ReqConsSectWoMan1 from 'components/RequestConsultationSection/img/RequestConsultation/item-3.webp';

import { PriceSection } from './PriceSection';

export const PricePage = () => {
  const location = useLocation();
  const state = location.state as BreadCrumbsI | null;

  return (
    <>
      <div className='container'>
        <BreadCrumbs currentPage={state?.currentPage} />
      </div>
      <PriceSection />
      <div className='big-container'>
        <RequestConsultationSection
          sectionBg={'#F3ACC8'}
          personImg={ReqConsSectWoMan1}
          colorText={'#FFFFFF'}
          classNameImg={'ReqConsSectWoMan1'}
        />
      </div>
    </>
  );
};
