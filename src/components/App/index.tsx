import React from 'react';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { TeamPage } from 'pages/TeamPage';
import { AboutPage } from 'pages/AboutPage';
import { ServicesPage } from 'pages/ServicesPage';
import { GalleryPage } from 'pages/GalleryPage';
import { HomePage } from 'pages/HomePage';

import { Layout } from 'components/Layout';

import { getAdvantages } from 'store/advantages/advantagesSlice';
import { getServices } from 'store/services/servicesSlice';
import { getBenefits } from 'store/benefits/benefitsSlice';
import { getTeams } from 'store/teams/teamsSlice';
import { getReviews } from 'store/reviews/reviewsSlice';
import { AppDispatch } from 'store';

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
          <Route path={`${paths.aboutPage}`} element={<AboutPage />} />
          <Route path={`${paths.servicesPage}`} element={<ServicesPage />} />
          <Route path={`${paths.galleryPage}`} element={<GalleryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
