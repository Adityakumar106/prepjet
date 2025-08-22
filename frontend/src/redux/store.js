import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Auth/authslice';
import userSlice from './User/userslice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export default store;