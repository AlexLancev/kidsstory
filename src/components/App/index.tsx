import React from 'react';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Layout } from 'components/Layout';
import { HomePage } from 'pages/HomePage';
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
