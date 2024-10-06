import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import planesService from 'store/servicesScop/planesService';
import { ServiceIdType } from 'types/api/serviceId';

// Типизация состояния
export interface ServiceIdState {
  serviceId: ServiceIdType | null;
  isError: boolean;
  isLoading: boolean;
  message: string;
}

// Типизация ошибки
interface ErrorResponse {
  message: string;
}

// Создание асинхронного thunk для получения команды по ID
export const getServiceId = createAsyncThunk<
  ServiceIdType, // Тип возвращаемого значения
  string, // Тип параметра (ID)
  { rejectValue: ErrorResponse } // Тип ошибки
>('GET_SERVICEID', async (id: string, thunkAPI) => {
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
});

// Создание slice для управления состоянием команды по ID
const serviceIdSlice = createSlice({
  name: 'serviceId',
  initialState: {
    serviceId: null,
    isError: false,
    isLoading: false,
    message: '',
  } as ServiceIdState,
  reducers: {}, // Необходимо явно указать, даже если пусто
  extraReducers: (builder) => {
    builder
      .addCase(getServiceId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getServiceId.fulfilled,
        (state, action: PayloadAction<ServiceIdType>) => {
          state.isLoading = false;
          state.serviceId = action.payload;
        },
      )
      .addCase(
        getServiceId.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.serviceId = null;
        },
      );
  },
});

export default serviceIdSlice.reducer;
