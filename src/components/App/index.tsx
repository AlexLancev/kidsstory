import React from 'react';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { TeamPage } from 'pages/TeamPage';
import { AboutPage } from 'pages/AboutPage';
import { ServicesPage } from 'pages/ServicesPage';
import { GalleryPage } from 'pages/GalleryPage';
import { HomePage } from 'pages/HomePage';

import { Layout } from 'components/Layout';
import { ServicesPageId } from 'components/ServicesList/ServicesPageId';

import { getAdvantages } from 'store/advantages/advantagesSlice';
import { getServices } from 'store/services/servicesSlice';
import { getBenefits } from 'store/benefits/benefitsSlice';
import { getTeams } from 'store/teams/teamsSlice';
import { getReviews } from 'store/reviews/reviewsSlice';
import { AppDispatch } from 'store';

import { ContactsPage } from 'pages/ContactsPage';
import { PricePage } from 'pages/AboutPage/PricePage';
import { ProgramPage } from 'pages/AboutPage/ProgramPage';
import { DocumentsPage } from 'pages/AboutPage/DocumentsPage';
import { ScheduleGroupPage } from 'pages/SchedulePage/ScheduleGroupPage';
import { DailyRoutinePage } from 'pages/SchedulePage/DailyRoutinePage';
import { DailyDietPage } from 'pages/AboutPage/DailyDietPage';

import { ReviewsPage } from 'pages/AboutPage/ReviewsPage';

import { TeamId } from 'components/Team/TeamId';

import { paths } from '../../paths';

function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
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
        <Route path={`${paths.home}`} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={`${paths.teamPage}`} element={<TeamPage />} />
          <Route path={`${paths.reviewsPage}`} element={<ReviewsPage />} />
          <Route path={`${paths.aboutPage}`} element={<AboutPage />} />
          <Route path={`${paths.servicesPage}`} element={<ServicesPage />} />
          <Route
            path={`${paths.servicesPageId}`}
            element={<ServicesPageId />}
          />
          <Route path={`${paths.teamId}`} element={<TeamId />} />
          <Route path={`${paths.galleryPage}`} element={<GalleryPage />} />
          <Route path={`${paths.contactsPage}`} element={<ContactsPage />} />
          <Route path={`${paths.programPage}`} element={<ProgramPage />} />
          <Route path={`${paths.dailyDietPage}`} element={<DailyDietPage />} />
          <Route path={`${paths.pricePage}`} element={<PricePage />} />
          <Route path={`${paths.documentsPage}`} element={<DocumentsPage />} />
          <Route
            path={`${paths.scheduleGroupPage}`}
            element={<ScheduleGroupPage />}
          />
          <Route
            path={`${paths.dailyRoutinePage}`}
            element={<DailyRoutinePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
