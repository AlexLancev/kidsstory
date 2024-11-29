import { configureStore } from '@reduxjs/toolkit';

export { getAdvantages } from 'store/advantages/advantagesSlice';
export { getServices } from 'store/services/servicesSlice';
export { getServiceId } from 'store/service/serviceSlice';
export { getBenefits } from 'store/benefits/benefitsSlice';
export { getTeams } from 'store/teams/teamsSlice';
export { getReviews } from 'store/reviews/reviewsSlice';
export { getTeamId } from 'store/team/teamSlice';
export { planesService } from 'store/servicesScop/planesService';

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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
