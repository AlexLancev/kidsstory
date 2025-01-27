import { BreadCrumbs } from 'components';

import { DailyRoutineSection } from './DailyRoutineSection';

export const DailyRoutinePage = () => {
  return (
    <div className='container'>
      <BreadCrumbs />
      <DailyRoutineSection />
    </div>
  );
};
