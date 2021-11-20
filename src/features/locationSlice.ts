import { createSlice } from '@reduxjs/toolkit';

export interface LocationState {
    location: any;
}

const initialState: LocationState = {
  location: [43.446782, -1.589371],
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
