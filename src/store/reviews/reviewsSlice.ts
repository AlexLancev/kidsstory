import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { Reviews } from '../../types';
import planesService from '../servicesScop/planesService';

// Типизация состояния
export interface ReviewsState {
  planes: Reviews[] | null;
  isError: boolean;
  isLoading: boolean;
  message: string;
}

// Типизация ошибки
interface ErrorResponse {
  message: string;
}

// Создание асинхронного thunk для получения команд
export const getReviews = createAsyncThunk<
  Reviews[],
  void,
  { rejectValue: ErrorResponse }
>('GET_REVIEWS', async (_, thunkAPI) => {
  try {
    const response = await planesService.getReviews();
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
const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    planes: null,
    isError: false,
    isLoading: false,
    message: '',
  } as ReviewsState,
  reducers: {}, // Необходимо явно указать, даже если пусто
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getReviews.fulfilled,
        (state, action: PayloadAction<Reviews[]>) => {
          state.isLoading = false;
          state.planes = action.payload;
        },
      )
      .addCase(
        getReviews.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.planes = null;
        },
      );
  },
});

export default reviewsSlice.reducer;
