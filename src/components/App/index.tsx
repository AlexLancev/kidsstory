import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  AboutPage,
  TeamPage,
  ServicesPage,
  GalleryPage,
  HomePage,
  ContactsPage,
  PricePage,
  ProgramPage,
  DocumentsPage,
  ScheduleGroupPage,
  DailyRoutinePage,
  DailyDietPage,
  ReviewsPage,
} from 'pages';
import {
  AppDispatch,
  getAdvantages,
  getServices,
  getBenefits,
  getTeams,
  getReviews,
} from 'store';
import { Layout, ServicesPageId, TeamId } from 'components';

import { paths } from '../../paths';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAdvantages());
    dispatch(getServices());
    dispatch(getBenefits());
    dispatch(getTeams());
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={paths.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={paths.teamPage} element={<TeamPage />} />
          <Route path={paths.reviewsPage} element={<ReviewsPage />} />
          <Route path={paths.aboutPage} element={<AboutPage />} />
          <Route path={paths.servicesPage} element={<ServicesPage />} />
          <Route path={paths.servicesPageId} element={<ServicesPageId />} />
          <Route path={paths.teamId} element={<TeamId />} />
          <Route path={paths.galleryPage} element={<GalleryPage />} />
          <Route path={paths.contactsPage} element={<ContactsPage />} />
          <Route path={paths.programPage} element={<ProgramPage />} />
          <Route path={paths.dailyDietPage} element={<DailyDietPage />} />
          <Route path={paths.pricePage} element={<PricePage />} />
          <Route path={paths.documentsPage} element={<DocumentsPage />} />
          <Route
            path={paths.scheduleGroupPage}
            element={<ScheduleGroupPage />}
          />
          <Route path={paths.dailyRoutinePage} element={<DailyRoutinePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
