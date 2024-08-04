// eslint-disable-next-line import/order
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import planesService from '../servicesScop/planesService';

export const getReviews = createAsyncThunk(
  'GET_REVIEWS',
  async (_, thunkAPI) => {
    try {
      return await planesService.getReviews();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    planes: null,
    isError: false,
    isLoading: false,
    message: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.planes = action.payload;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.planes = null;
      });
  },
});

export default reviewsSlice.reducer;
