// eslint-disable-next-line import/order
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import planesService from '../servicesScop/planesService';

export const getTeams = createAsyncThunk('GET_TEAMS', async (_, thunkAPI) => {
  try {
    return await planesService.getTeams();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    planes: null,
    isError: false,
    isLoading: false,
    message: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTeams.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.planes = action.payload;
      })
      .addCase(getTeams.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.planes = null;
      });
  },
});

export default teamsSlice.reducer;
