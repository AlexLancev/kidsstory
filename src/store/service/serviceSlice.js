// eslint-disable-next-line import/order
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import planesService from '../servicesScop/planesService';

export const getService = createAsyncThunk(
  'GET_SERVICE',
  async (id, thunkAPI) => {
    try {
      return await planesService.getService(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const serviceSlice = createSlice({
  name: 'service',
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
      .addCase(getService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plane = action.payload[0];
      })
      .addCase(getService.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.plane = null;
      });
  },
});

export const { resetPlaneErrors } = serviceSlice.actions;
export default serviceSlice.reducer;
