import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import cartReducer from './CartReducer';
import FavouriteReducer from './FavouriteReducer';
import ProductSlice from './ProductSlice';

const store = configureStore({
  reducer: {
    user: UserSlice,
    cart: cartReducer,
    favourites: FavouriteReducer,
    products: ProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
