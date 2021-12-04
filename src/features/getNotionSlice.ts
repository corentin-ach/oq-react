import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type Notion = {
    notion: any | null,
    loading: boolean
}

const initialState: Notion = {
  notion: null,
  loading: false,
};

const url = process.env.REACT_APP_API;

export const getNotion = createAsyncThunk(
  'notion',
  // eslint-disable-next-line no-unused-vars
  async (thunkAPI) => {
    const res = await fetch(`${url}/notion`).then(
      (data) => data.json(),
    );
    return res;
  },
);

export const getNotionSlice = createSlice({
  name: 'notion',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotion.pending, (state) => {
      state.loading = true;
    })
      .addCase(
        getNotion.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.notion = payload;
        },
      )
      .addCase(
        getNotion.rejected, (state) => {
          state.loading = false;
        },
      );
  },
});

export default getNotionSlice.reducer;
