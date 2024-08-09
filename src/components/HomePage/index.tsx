import React from 'react';
import { useDispatch } from 'react-redux';

import { getTeams } from 'store/teams/teamsSlice';

import { AppDispatch } from '../../store';

export const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return <></>;
};
