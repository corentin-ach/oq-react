import { createSlice } from '@reduxjs/toolkit';

export interface LocationState {
    location: any;
}

const initialState: LocationState = {
  location: [47.166302, -1.531076],
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    findLocation: (state, latlng) => {
      state.location = latlng.payload;
    },
  },
});

export const { findLocation } = locationSlice.actions;

export default locationSlice.reducer;
