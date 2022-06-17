import { createSlice } from '@reduxjs/toolkit';
import { cartItems } from '../Model';

interface FavoriteInitialState {
  favouriteItems: cartItems[];
}

const local_favItems = localStorage.getItem('favouriteItems');
const initialState: FavoriteInitialState = {
  favouriteItems: local_favItems ? JSON.parse(local_favItems) : [],
};

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      const exist = state.favouriteItems.find(
        (x) => x.id === action.payload.id
      );

      if (exist) {
        const product = state.favouriteItems.filter((x) => x.id !== exist.id);
        state.favouriteItems = product;
      } else {
        state.favouriteItems.push(action.payload);
      }
      localStorage.setItem(
        'favouriteItems',
        JSON.stringify(state.favouriteItems)
      );
    },
  },
});

export const { addFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
