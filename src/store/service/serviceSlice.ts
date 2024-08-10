import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import planesService from 'store/servicesScop/planesService';
import { ServiceId } from 'types/api/serviceId';

// Типизация состояния
export interface ServiceIdState {
  planes: ServiceId | null;
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
  ServiceId, // Тип возвращаемого значения
  string, // Тип параметра (ID)
  { rejectValue: ErrorResponse } // Тип ошибки
>('GET_SERVICEID', async (id: string, thunkAPI) => {
  try {
    const response = await planesService.getServiceId(id); // Обновите метод на getTeam, если он правильный
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
    planes: null,
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
        (state, action: PayloadAction<ServiceId>) => {
          state.isLoading = false;
          state.planes = action.payload;
        },
      )
      .addCase(
        getServiceId.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.planes = null;
        },
      );
  },
});

export default serviceIdSlice.reducer;
