import { createSlice } from '@reduxjs/toolkit';

type Quality = {
  status: number;
  water: number;
  plastic: number;
  seal: number;
}

export type Spot = {
  name: string;
  quality: Quality;
}

export interface SpotState {
    spot: Spot
}

const initialState: SpotState = {
  spot: {
    name: 'La Milady',
    quality: {
      status: 1,
      water: 1,
      plastic: 1,
      seal: 1,
    },
  },
};

export const showSpotSlice = createSlice({
  name: 'spot',
  initialState,
  reducers: {
    setSpot: (state, marker) => {
      state.spot.name = marker.payload.name;
      state.spot.quality.status = marker.payload.quality.status;
      state.spot.quality.water = marker.payload.quality.water;
      state.spot.quality.plastic = marker.payload.quality.plastic;
      state.spot.quality.seal = marker.payload.quality.seal;
    },
  },
});

export const { setSpot } = showSpotSlice.actions;

export default showSpotSlice.reducer;
