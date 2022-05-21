import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import cartReducer from './CartReducer';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    cart: cartReducer,
  },
});
