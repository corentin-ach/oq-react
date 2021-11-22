import { createSlice } from '@reduxjs/toolkit';

export type Spot = {
  name: string;
  quality: number;
}

export interface SpotState {
    spot: Spot
}

const initialState: SpotState = {
  spot: {
    name: 'La Milady',
    quality: 1,
  },
};

export const showSpotSlice = createSlice({
  name: 'spot',
  initialState,
  reducers: {
    setSpot: (state, marker) => {
      state.spot.name = marker.payload.name;
      state.spot.quality = marker.payload.quality;
    },
  },
});

export const { setSpot } = showSpotSlice.actions;

export default showSpotSlice.reducer;
