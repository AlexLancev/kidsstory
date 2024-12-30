import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { planesService } from 'store';

interface ServiceIdState extends StateProps {
  serviceId: ServicesType | null;
}

export const getServiceId = createAsyncThunk<ServicesType, string, { rejectValue: ErrorResponse }>(
  'GET_SERVICEID',
  async (id: string, thunkAPI) => {
    try {
      const response = await planesService.getServiceId(id);
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

const serviceIdSlice = createSlice({
  name: 'serviceId',
  initialState: {
    serviceId: null,
    isError: false,
    isLoading: false,
    message: '',
  } as ServiceIdState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServiceId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getServiceId.fulfilled, (state, action: PayloadAction<ServicesType>) => {
        state.isLoading = false;
        state.serviceId = action.payload;
      })
      .addCase(getServiceId.rejected, (state, action: PayloadAction<ErrorResponse | undefined>) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload?.message ?? 'Error';
        state.serviceId = null;
      });
  },
});

export default serviceIdSlice.reducer;
