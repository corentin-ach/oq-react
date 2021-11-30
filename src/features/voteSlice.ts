import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type Quality = {
    water: boolean,
    plastic: boolean,
    seal: boolean,
}

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
      body: JSON.stringify({ quality: spot.quality }),
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
