// eslint-disable-next-line import/order
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import planesService from '../servicesScop/planesService';

export const getTeam = createAsyncThunk('GET_TEAM', async (id, thunkAPI) => {
  try {
    return await planesService.getTeam(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const teamSlice = createSlice({
  name: 'team',
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
      .addCase(getTeam.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeam.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plane = action.payload[0];
      })
      .addCase(getTeam.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.plane = null;
      });
  },
});

export const { resetPlaneErrors } = teamSlice.actions;
export default teamSlice.reducer;
