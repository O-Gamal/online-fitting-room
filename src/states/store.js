import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './admin.js';
import userReducer from './user.js';

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    user: userReducer,
  },
})