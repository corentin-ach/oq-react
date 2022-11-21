/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';

export interface SpotState {
    spot: {
      id: string,
      bySearch: boolean
    },
}

const initialState: SpotState = {
  spot: {
    id: '',
    bySearch: false,
  },
};

export const showSpotSlice = createSlice({
  name: 'spot',
  initialState,
  reducers: {
    setSpot: (state, marker) => {
      state.spot.id = marker.payload.id;
      state.spot.bySearch = marker.payload.bySearch;
    },
  },
});

export const { setSpot } = showSpotSlice.actions;

export default showSpotSlice.reducer;
