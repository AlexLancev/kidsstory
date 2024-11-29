import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { planesService } from 'store';
import { ReviewIdType } from 'types/api/reviewId';

export interface ReviewIdState {
  reviewId: ReviewIdType | null;
  isError: boolean;
  isLoading: boolean;
  message: string;
}

interface ErrorResponse {
  message: string;
}

export const getReviewId = createAsyncThunk<
  ReviewIdType,
  string,
  { rejectValue: ErrorResponse }
>('GET_REVIEWID', async (id: string, thunkAPI) => {
  try {
    const response = await planesService.getReviewId(id);
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

const reviewIdSlice = createSlice({
  name: 'reviewId',
  initialState: {
    reviewId: null,
    isError: false,
    isLoading: false,
    message: '',
  } as ReviewIdState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviewId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getReviewId.fulfilled,
        (state, action: PayloadAction<ReviewIdType>) => {
          state.isLoading = false;
          state.reviewId = action.payload;
        },
      )
      .addCase(
        getReviewId.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.reviewId = null;
        },
      );
  },
});

export default reviewIdSlice.reducer;
