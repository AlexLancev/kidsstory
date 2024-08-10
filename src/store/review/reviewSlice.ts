import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import planesService from 'store/servicesScop/planesService';
import { ReviewId } from 'types/api/reviewId';

// Типизация состояния
export interface ReviewIdState {
  planes: ReviewId | null;
  isError: boolean;
  isLoading: boolean;
  message: string;
}

// Типизация ошибки
interface ErrorResponse {
  message: string;
}

// Создание асинхронного thunk для получения команды по ID
export const getReviewId = createAsyncThunk<
  ReviewId, // Тип возвращаемого значения
  string, // Тип параметра (ID)
  { rejectValue: ErrorResponse } // Тип ошибки
>('GET_REVIEWID', async (id: string, thunkAPI) => {
  try {
    const response = await planesService.getReviewId(id); // Обновите метод на getTeam, если он правильный
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

// Создание slice для управления состоянием команды по ID
const reviewIdSlice = createSlice({
  name: 'reviewId',
  initialState: {
    planes: null,
    isError: false,
    isLoading: false,
    message: '',
  } as ReviewIdState,
  reducers: {}, // Необходимо явно указать, даже если пусто
  extraReducers: (builder) => {
    builder
      .addCase(getReviewId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getReviewId.fulfilled,
        (state, action: PayloadAction<ReviewId>) => {
          state.isLoading = false;
          state.planes = action.payload;
        },
      )
      .addCase(
        getReviewId.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.planes = null;
        },
      );
  },
});

export default reviewIdSlice.reducer;
