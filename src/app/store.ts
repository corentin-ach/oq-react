import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../features/themeSlice';
import spotsReducer from '../features/getSpotsSlice';
import locationReducer from '../features/locationSlice';
import spotReducer from '../features/setSpotSlice';
import voteReducer from '../features/voteSlice';

export const store = configureStore({
  reducer: {
    theme: toggleReducer,
    spots: spotsReducer,
    location: locationReducer,
    spot: spotReducer,
    vote: voteReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const url = process.env.REACT_APP_API;
