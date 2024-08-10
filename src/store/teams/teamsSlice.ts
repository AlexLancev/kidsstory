import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import planesService from 'store/servicesScop/planesService';
import { Teams } from 'types/api/teams';

// Типизация состояния
export interface TeamsState {
  planes: Teams[] | null;
  isError: boolean;
  isLoading: boolean;
  message: string;
}

// Типизация ошибки
interface ErrorResponse {
  message: string;
}

// Создание асинхронного thunk для получения команд
export const getTeams = createAsyncThunk<
  Teams[],
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

// Создание slice для управления состоянием команд
const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    planes: null,
    isError: false,
    isLoading: false,
    message: '',
  } as TeamsState,
  reducers: {}, // Необходимо явно указать, даже если пусто
  extraReducers: (builder) => {
    builder
      .addCase(getTeams.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeams.fulfilled, (state, action: PayloadAction<Teams[]>) => {
        state.isLoading = false;
        state.planes = action.payload;
      })
      .addCase(
        getTeams.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.planes = null;
        },
      );
  },
});

export default teamsSlice.reducer;
