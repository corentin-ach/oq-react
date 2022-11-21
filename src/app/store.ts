import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../features/themeSlice';
import spotReducer from '../features/setSpotSlice';

export const store = configureStore({
  reducer: {
    theme: toggleReducer,
    spot: spotReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const url = process.env.REACT_APP_API;
export const key = process.env.REACT_APP_MAPBOX;
