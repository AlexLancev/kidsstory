import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { planesService } from 'store';
import { TeamsType } from 'types/api/teams';

export interface TeamsState {
  teamsArray: TeamsType[] | null;
  isError: boolean;
  isLoading: boolean;
  message: string;
}

interface ErrorResponse {
  message: string;
}

export const getTeams = createAsyncThunk<
  TeamsType[],
  void,
  { rejectValue: ErrorResponse }
>('GET_TEAMS', async (_, thunkAPI) => {
  try {
    const response = await planesService.getTeams();
    return response;
  } catch (error) {
    let err: AxiosError<ErrorResponse>;
    if (axios.isAxiosError(error)) {
      err = error;
      return thunkAPI.rejectWithValue(err.response?.data as ErrorResponse);
    } else {
      return thunkAPI.rejectWithValue({ message: 'Unknown error' });
    }
  }
});

const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    teamsArray: null,
    isError: false,
    isLoading: false,
    message: '',
  } as TeamsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTeams.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getTeams.fulfilled,
        (state, action: PayloadAction<TeamsType[]>) => {
          state.isLoading = false;
          state.teamsArray = action.payload;
        },
      )
      .addCase(
        getTeams.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.teamsArray = null;
        },
      );
  },
});

export default teamsSlice.reducer;
