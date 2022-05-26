import { createSlice } from '@reduxjs/toolkit';

const favouriteReducer = createSlice({
  name: 'favourites',
  initialState: {
    favouriteItems: localStorage.getItem('favouriteItems')
      ? JSON.parse(localStorage.getItem('favouriteItems'))
      : [],
  },
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

export const { addFavourite } = favouriteReducer.actions;

export default favouriteReducer.reducer;
