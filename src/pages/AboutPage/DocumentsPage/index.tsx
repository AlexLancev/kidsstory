import { useLocation } from 'react-router-dom';

import { BreadCrumbs, BreadCrumbsI } from 'components/BreadCrumbs';

import { DocumentsSection } from './DocumentsSection';

export const DocumentsPage = () => {
  const location = useLocation();
  const state = location.state as BreadCrumbsI | null;

  return (
    <>
      <BreadCrumbs currentPage={state?.currentPage} />
      <DocumentsSection />
    </>
  );
};
