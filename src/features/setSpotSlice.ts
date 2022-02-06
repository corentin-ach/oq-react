/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';

type Quality = {
  water: boolean;
  plastic: boolean;
  seal: boolean;
  date: string;
}

export type Spot = {
  id: string;
  coords: Array<number>;
  name: string;
  quality: Quality;
  status: boolean;
  bySearch: boolean;
}
export interface SpotState {
    spot: Spot,
}

const initialState: SpotState = {
  spot: {
    id: '',
    coords: [0, 0],
    name: 'La Milady',
    quality: {
      water: false,
      plastic: false,
      seal: false,
      date: '',
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
      state.spot.status = marker.payload.status;
      state.spot.bySearch = marker.payload.bySearch;
    },
  },
});

export const { setSpot } = showSpotSlice.actions;

export default showSpotSlice.reducer;
