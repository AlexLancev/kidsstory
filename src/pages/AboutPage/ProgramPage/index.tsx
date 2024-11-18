import { useLocation } from 'react-router-dom';

import ReqConsSectWoMan1 from 'components/RequestConsultationSection/img/RequestConsultation/item-3.webp';
import { RequestConsultationSection } from 'components/RequestConsultationSection';
import { BreadCrumbs, BreadCrumbsI } from 'components/BreadCrumbs';

import { ProgramSection } from './ProgramSection';

export const ProgramPage = () => {
  const location = useLocation();
  const state = location.state as BreadCrumbsI | null;

  return (
    <>
      <BreadCrumbs currentPage={state?.currentPage} />
      <ProgramSection />
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
