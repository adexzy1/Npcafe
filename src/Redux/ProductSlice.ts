import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../Model';
import axios from 'axios';

// fetch products with async thunk
const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await axios.get(
    'https://pizza-store-da4a5-default-rtdb.firebaseio.com/Products.json'
  );
  return (await response.data) as Product[];
});

// typescript interface
interface productInitialState {
  products: Product[];
  loading: 'pending' | 'fulfilled' | 'rejected';
}

// initial state
const initialState: productInitialState = {
  products: [],
  loading: 'pending',
};

// product slice

const productSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {
    addFavoutite: (state, action) => {
      // find the item in the array
      const item = state.products.find((x) => x.id === action.payload);
      // mutate the isFavourite property of the item
      item!.isFavourite = !item?.isFavourite;
      // update the glabal state
      state.products = [...state.products];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = action.meta.requestStatus;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      // sort the response base on their name property
      const compare = (a: Product, b: Product) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      };

      /* create a new array of objects from the API response 
      and add the index of each object as key*/

      const allProducts = action.payload
        .map((item, index) => {
          return { ...item, key: index };
        })
        .sort(compare);

      state.products = allProducts;
      state.loading = action.meta.requestStatus;
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = action.meta.requestStatus;
    });
  },
});

export { getProducts };

export const { addFavoutite } = productSlice.actions;

export default productSlice.reducer;
