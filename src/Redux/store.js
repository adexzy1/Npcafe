import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import cartReducer from './CartReducer';
import FavouriteReducer from './FavouriteReducer';
import ProductSlice from './ProductSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    cart: cartReducer,
    favourites: FavouriteReducer,
    products: ProductSlice,
  },
});
