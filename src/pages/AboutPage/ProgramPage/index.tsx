import ReqConsSectWoMan1 from 'components/RequestConsultationSection/img/RequestConsultation/item-3.webp';
import { RequestConsultationSection } from 'components/RequestConsultationSection';

import { ProgramSection } from './ProgramSection';

export const ProgramPage = () => {
  return (
    <>
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
