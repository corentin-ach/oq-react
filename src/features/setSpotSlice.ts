/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';
import { Spot } from './getSpotsSlice';

export interface SpotState {
    spot: Spot,
}

const initialState: SpotState = {
  spot: {
    id: '',
    area: 64,
    coords: [0, 0],
    name: 'La Milady',
    quality: {
      water: false,
      plastic: false,
      seal: false,
      date: '',
      observation: '',
    },
    status: false,
    bySearch: false,
  },
};

export const showSpotSlice = createSlice({
  name: 'spot',
  initialState,
  reducers: {
    setSpot: (state, marker) => {
      state.spot.id = marker.payload.id;
      state.spot.coords = marker.payload.coords;
      state.spot.name = marker.payload.name;
      state.spot.quality.water = marker.payload.water;
      state.spot.quality.plastic = marker.payload.plastic;
      state.spot.quality.seal = marker.payload.seal;
      state.spot.quality.date = marker.payload.date;
      state.spot.quality.observation = marker.payload.observation;
      state.spot.status = marker.payload.status;
      state.spot.bySearch = marker.payload.bySearch;
    },
  },
});

export const { setSpot } = showSpotSlice.actions;

export default showSpotSlice.reducer;
