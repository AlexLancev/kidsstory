// eslint-disable-next-line import/order
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import planesService from '../servicesScop/planesService';

export const getReview = createAsyncThunk(
  'GET_REVIEW',
  async (id, thunkAPI) => {
    try {
      return await planesService.getReview(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    plane: null,
    isError: false,
    isLoading: false,
    message: '',
    errors: null,
  },
  reducers: {
    resetPlaneErrors: (state) => {
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plane = action.payload[0];
      })
      .addCase(getReview.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.plane = null;
      });
  },
});

export const { resetPlaneErrors } = reviewSlice.actions;
export default reviewSlice.reducer;
