import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import cartSlice from './CartSlice';
import ProductSlice from './ProductSlice';

const store = configureStore({
  reducer: {
    user: UserSlice,
    cart: cartSlice,
    products: ProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
