import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { planesService } from 'store';

export interface ServicesState extends StateProps {
  servicesArray: ServicesType[] | null;
}

export const getServices = createAsyncThunk<ServicesType[], void, { rejectValue: ErrorResponse }>(
  'GET_SERVICES',
  async (_, thunkAPI) => {
    try {
      const response = await planesService.getServices();
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
  },
);

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    servicesArray: null,
    isError: false,
    isLoading: false,
    message: '',
  } as ServicesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getServices.fulfilled, (state, action: PayloadAction<ServicesType[]>) => {
        state.isLoading = false;
        state.servicesArray = action.payload;
      })
      .addCase(getServices.rejected, (state, action: PayloadAction<ErrorResponse | undefined>) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload?.message ?? 'Error';
        state.servicesArray = null;
      });
  },
});

export default servicesSlice.reducer;
