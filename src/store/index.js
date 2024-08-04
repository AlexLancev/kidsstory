// eslint-disable-next-line import/order
import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './teams/teamsSlice';
import teamReducer from './team/teamSlice';
import reviewsReducer from './reviews/reviewsSlice';
import reviewReducer from './review/reviewSlice';
import servicesReducer from './services/servicesSlice';
import serviceReducer from './services/serviceSlice';

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
    team: teamReducer,
    reviews: reviewsReducer,
    review: reviewReducer,
    services: servicesReducer,
    service: serviceReducer,
  },
});
