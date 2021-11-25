import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export type Spot = {
    coords: Array<number>,
    name: string
    quality: number
    id: string
}

type AllSpot = {
    spots: Array<Spot>,
    loading: boolean
}

const initialState: AllSpot = {
  spots: [],
  loading: false,
};

const url = process.env.REACT_APP_API;

export const getSpots = createAsyncThunk(
  'spots',
  // eslint-disable-next-line no-unused-vars
  async (thunkAPI) => {
    const res = await fetch(`${url}/spots`).then(
      (data) => data.json(),
    );
    return res;
  },
);

export const getSpotsSlice = createSlice({
  name: 'spots',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpots.pending, (state) => {
      state.loading = true;
    })
      .addCase(
        getSpots.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.spots = payload;
        },
      )
      .addCase(
        getSpots.rejected, (state) => {
          state.loading = false;
        },
      );
  },
});

export default getSpotsSlice.reducer;
