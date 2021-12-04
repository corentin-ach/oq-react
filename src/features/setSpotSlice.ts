import { createSlice } from '@reduxjs/toolkit';

type Quality = {
  status: boolean;
  water: boolean;
  plastic: boolean;
  seal: boolean;
}

export type Spot = {
  id: string,
  name: string;
  quality: Quality;
  status: boolean;
}

export interface SpotState {
    spot: Spot
}

const initialState: SpotState = {
  spot: {
    id: '',
    name: 'La Milady',
    quality: {
      status: false,
      water: false,
      plastic: false,
      seal: false,
    },
    status: false,
  },
};

export const showSpotSlice = createSlice({
  name: 'spot',
  initialState,
  reducers: {
    setSpot: (state, marker) => {
      state.spot.id = marker.payload.id;
      state.spot.name = marker.payload.name;
      state.spot.quality.status = marker.payload.quality.status;
      state.spot.quality.water = marker.payload.quality.water;
      state.spot.quality.plastic = marker.payload.quality.plastic;
      state.spot.quality.seal = marker.payload.quality.seal;
      state.spot.status = marker.payload.status;
    },
  },
});

export const { setSpot } = showSpotSlice.actions;

export default showSpotSlice.reducer;
