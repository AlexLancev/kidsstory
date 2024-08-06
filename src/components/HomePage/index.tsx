import React from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../store';
import { getTeams } from '../../store/teams/teamsSlice';

export const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTeams()); 
  }, [dispatch]);

  return <></>;
};
