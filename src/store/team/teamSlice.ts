import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { planesService } from 'store';
import { TeamIdType } from 'types/api/teamId';

export interface TeamIdState {
  teamId: TeamIdType | null;
  isError: boolean;
  isLoading: boolean;
  message: string;
}

interface ErrorResponse {
  message: string;
}

export const getTeamId = createAsyncThunk<
  TeamIdType,
  string,
  { rejectValue: ErrorResponse }
>('GET_TEAMID', async (id: string, thunkAPI) => {
  try {
    const response = await planesService.getTeamId(id);
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

const teamIdSlice = createSlice({
  name: 'teamId',
  initialState: {
    teamId: null,
    isError: false,
    isLoading: false,
    message: '',
  } as TeamIdState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTeamId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getTeamId.fulfilled,
        (state, action: PayloadAction<TeamIdType>) => {
          state.isLoading = false;
          state.teamId = action.payload;
        },
      )
      .addCase(
        getTeamId.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.teamId = null;
        },
      );
  },
});

export default teamIdSlice.reducer;
