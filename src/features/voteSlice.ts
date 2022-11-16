import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { Quality } from './getSpotsSlice';

export type Vote = {
    id: string;
    quality: Quality;
    loading: boolean
}

const initialState: Vote = {
  id: '',
  quality: {
    water: false,
    plastic: false,
    seal: false,
    date: '',
    observation: '',
  },
  loading: false,
};

const url = process.env.REACT_APP_API;

export const setVote = createAsyncThunk(
  'vote',
  // eslint-disable-next-line no-unused-vars
  async (spot: Vote, thunkAPI) => {
    const res = await fetch(`${url}/spot/${spot.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quality: { ...spot.quality, date: dayjs(new Date()).format('YYYY-MM-DD') } }),
    }).then((response) => response.json());
    return res;
  },
);

export const voteSlice = createSlice({
  name: 'spots',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setVote.pending, (state) => {
      state.loading = true;
    })
      .addCase(
        setVote.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.id = payload.id;
          state.quality.water = payload.water;
          state.quality.plastic = payload.plastic;
          state.quality.seal = payload.seal;
          state.quality.date = payload.date;
          state.quality.observation = payload.observation;
        },
      )
      .addCase(
        setVote.rejected, (state) => {
          state.loading = false;
        },
      );
  },
});

export default voteSlice.reducer;
