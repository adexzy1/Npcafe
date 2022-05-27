import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import cartReducer from './CartReducer';
import FavouriteReducer from './FavouriteReducer';
import AuthReducer from './AuthReducer';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    cart: cartReducer,
    favourites: FavouriteReducer,
    auth: AuthReducer,
  },
});
