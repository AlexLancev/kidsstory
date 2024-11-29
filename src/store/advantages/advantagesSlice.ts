import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { planesService } from 'store';
import { AdvantagesType } from 'types/api/advantages';

export interface AdvantagesState {
  advantagesArray: AdvantagesType[] | null;
  isError: boolean;
  isLoading: boolean;
  message: string;
}

interface ErrorResponse {
  message: string;
}

export const getAdvantages = createAsyncThunk<
  AdvantagesType[],
  void,
  { rejectValue: ErrorResponse }
>('GET_ADVANTAGES', async (_, thunkAPI) => {
  try {
    const response = await planesService.getAdvantages();
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

const advantagesSlice = createSlice({
  name: 'advantages',
  initialState: {
    advantagesArray: null,
    isError: false,
    isLoading: false,
    message: '',
  } as AdvantagesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdvantages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getAdvantages.fulfilled,
        (state, action: PayloadAction<AdvantagesType[]>) => {
          state.isLoading = false;
          state.advantagesArray = action.payload;
        },
      )
      .addCase(
        getAdvantages.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.advantagesArray = null;
        },
      );
  },
});

export default advantagesSlice.reducer;
