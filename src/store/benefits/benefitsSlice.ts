import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import planesService from 'store/servicesScop/planesService';
import { BenefitsType } from 'types/api/benefits';

// Типизация состояния
export interface BenefitsState {
  benefitsArray: BenefitsType[] | null;
  isError: boolean;
  isLoading: boolean;
  message: string;
}

// Типизация ошибки
interface ErrorResponse {
  message: string;
}

// Создание асинхронного thunk для получения команд
export const getBenefits = createAsyncThunk<
  BenefitsType[],
  void,
  { rejectValue: ErrorResponse }
>('GET_BENEFITS', async (_, thunkAPI) => {
  try {
    const response = await planesService.getBenefits();
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
const benefitsSlice = createSlice({
  name: 'benefits',
  initialState: {
    benefitsArray: null,
    isError: false,
    isLoading: false,
    message: '',
  } as BenefitsState,
  reducers: {}, // Необходимо явно указать, даже если пусто
  extraReducers: (builder) => {
    builder
      .addCase(getBenefits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getBenefits.fulfilled,
        (state, action: PayloadAction<BenefitsType[]>) => {
          state.isLoading = false;
          state.benefitsArray = action.payload;
        },
      )
      .addCase(
        getBenefits.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.benefitsArray = null;
        },
      );
  },
});

export default benefitsSlice.reducer;
