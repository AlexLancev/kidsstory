import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import planesService from 'store/servicesScop/planesService';
import { Services } from 'types/services';

// Типизация состояния
export interface ServicesState {
  planes: Services[] | null;
  isError: boolean;
  isLoading: boolean;
  message: string;
}

// Типизация ошибки
interface ErrorResponse {
  message: string;
}

// Создание асинхронного thunk для получения команд
export const getServices = createAsyncThunk<
  Services[],
  void,
  { rejectValue: ErrorResponse }
>('GET_SERVICES', async (_, thunkAPI) => {
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
});

// Создание slice для управления состоянием команд
const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    planes: null,
    isError: false,
    isLoading: false,
    message: '',
  } as ServicesState,
  reducers: {}, // Необходимо явно указать, даже если пусто
  extraReducers: (builder) => {
    builder
      .addCase(getServices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getServices.fulfilled,
        (state, action: PayloadAction<Services[]>) => {
          state.isLoading = false;
          state.planes = action.payload;
        },
      )
      .addCase(
        getServices.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.planes = null;
        },
      );
  },
});

export default servicesSlice.reducer;