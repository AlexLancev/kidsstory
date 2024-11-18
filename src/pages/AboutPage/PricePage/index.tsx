import { useLocation } from 'react-router-dom';

import { RequestConsultationSection } from 'components/RequestConsultationSection';
import ReqConsSectWoMan1 from 'components/RequestConsultationSection/img/RequestConsultation/item-3.webp';
import { BreadCrumbs, BreadCrumbsI } from 'components/BreadCrumbs';

import { PriceSection } from './PriceSection';

export const PricePage = () => {
  const location = useLocation();
  const state = location.state as BreadCrumbsI | null;

  return (
    <>
      <BreadCrumbs currentPage={state?.currentPage} />
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
