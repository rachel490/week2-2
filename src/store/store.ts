import { configureStore } from '@reduxjs/toolkit';
import messengerReducer from './messenger';

export const store = configureStore({
  reducer: {
    messenger: messengerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
