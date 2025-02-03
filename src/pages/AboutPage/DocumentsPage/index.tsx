import { useLocation } from 'react-router-dom';

import { BreadCrumbs, BreadCrumbsI } from 'components';

import { DocumentsSection } from './DocumentsSection';

export const DocumentsPage = () => {
  const location = useLocation();
  const state = location.state as BreadCrumbsI | null;

  return (
    <>
      <div className='container'>
        <BreadCrumbs currentPage={state?.currentPage} />
      </div>
      <DocumentsSection />
    </>
  );
};
