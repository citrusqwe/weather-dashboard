import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../redux/store';
import { getWeatherData } from '../weatherAPI';
export interface WeatherState {
  data: any;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: WeatherState = {
  data: {},
  status: 'loading',
};

export const getWeatherAsync = createAsyncThunk(
  'counter/fetchWeather',
  async (location: { lat: number; long: number }) => {
    const data = await getWeatherData(location.lat, location.long);
    return data;
  }
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getWeatherAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getWeatherAsync.fulfilled, (state, action) => {
        state.data = { ...action.payload };
        state.status = 'idle';
      });
  },
});

export const {} = weatherSlice.actions;

export const selectWeather = (state: RootState) => state.weather;

export default weatherSlice.reducer;
