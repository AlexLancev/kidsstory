import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import planesService from 'store/servicesScop/planesService';
import { TeamId } from 'types/api/teamId';

// Типизация состояния
export interface TeamIdState {
  planes: TeamId | null;
  isError: boolean;
  isLoading: boolean;
  message: string;
}

// Типизация ошибки
interface ErrorResponse {
  message: string;
}

// Создание асинхронного thunk для получения команды по ID
export const getTeamId = createAsyncThunk<
  TeamId, // Тип возвращаемого значения
  string, // Тип параметра (ID)
  { rejectValue: ErrorResponse } // Тип ошибки
>('GET_TEAMID', async (id: string, thunkAPI) => {
  try {
    const response = await planesService.getTeamId(id); // Обновите метод на getTeam, если он правильный
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
const teamIdSlice = createSlice({
  name: 'teamId',
  initialState: {
    planes: null,
    isError: false,
    isLoading: false,
    message: '',
  } as TeamIdState,
  reducers: {}, // Необходимо явно указать, даже если пусто
  extraReducers: (builder) => {
    builder
      .addCase(getTeamId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeamId.fulfilled, (state, action: PayloadAction<TeamId>) => {
        state.isLoading = false;
        state.planes = action.payload;
      })
      .addCase(
        getTeamId.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.planes = null;
        },
      );
  },
});

export default teamIdSlice.reducer;
