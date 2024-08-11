import { configureStore } from '@reduxjs/toolkit';

import advantagesReducer from 'store/advantages/advantagesSlice';
import benefitsReducer from 'store/benefits/benefitsSlice';
import teamsReducer from 'store/teams/teamsSlice';
import reviewsReducer from 'store/reviews/reviewsSlice';
import servicesSlice from 'store/services/servicesSlice';
import teamIdSlice from 'store/team/teamSlice';
import reviewIdSlice from 'store/review/reviewSlice';
import serviceIdSlice from 'store/service/serviceSlice';

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
    reviews: reviewsReducer,
    services: servicesSlice,
    teamId: teamIdSlice,
    reviewId: reviewIdSlice,
    serviceId: serviceIdSlice,
    advantages: advantagesReducer,
    benefits: benefitsReducer,
  },
});

// Типизация для dispatch и state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
