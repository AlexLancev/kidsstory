import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { planesService } from 'store';
import { ReviewsType } from 'types/api/reviews';

export interface ReviewsState {
  reviewsArray: ReviewsType[] | null;
  isError: boolean;
  isLoading: boolean;
  message: string;
}

interface ErrorResponse {
  message: string;
}

export const getReviews = createAsyncThunk<
  ReviewsType[],
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

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviewsArray: null,
    isError: false,
    isLoading: false,
    message: '',
  } as ReviewsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getReviews.fulfilled,
        (state, action: PayloadAction<ReviewsType[]>) => {
          state.isLoading = false;
          state.reviewsArray = action.payload;
        },
      )
      .addCase(
        getReviews.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.reviewsArray = null;
        },
      );
  },
});

export default reviewsSlice.reducer;
