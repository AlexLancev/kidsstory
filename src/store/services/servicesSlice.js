// eslint-disable-next-line import/order
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import planesService from '../servicesScop/planesService';

export const getServices = createAsyncThunk(
  'GET_SERVICES',
  async (_, thunkAPI) => {
    try {
      return await planesService.getServices();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    planes: null,
    isError: false,
    isLoading: false,
    message: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(getServices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.planes = action.payload;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.planes = null;
      });
  },
});

export default servicesSlice.reducer;
