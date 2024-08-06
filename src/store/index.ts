import { configureStore } from '@reduxjs/toolkit';

import teamsReducer from './teams/teamsSlice';
import reviewsReducer from './reviews/reviewsSlice';
import servicesSlice from './services/servicesSlice';
import teamIdSlice from './team/teamSlice';
import reviewIdSlice from './review/reviewSlice';
import serviceIdSlice from './service/serviceSlice';

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
    reviews: reviewsReducer,
    services: servicesSlice,
    teamId: teamIdSlice,
    reviewId: reviewIdSlice,
    serviceId: serviceIdSlice,
  },
});

// Типизация для dispatch и state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
