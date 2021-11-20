import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../features/themeSlice';
import spotsReducer from '../features/getSpotsSlice';
import locationReducer from '../features/locationSlice';

export const store = configureStore({
  reducer: {
    theme: toggleReducer,
    spots: spotsReducer,
    location: locationReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
