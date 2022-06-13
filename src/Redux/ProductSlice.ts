import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../Model';

const getProducts = createAsyncThunk('products/getProducts', async () => {
  const res = await fetch(
    'https://pizza-store-da4a5-default-rtdb.firebaseio.com/Products.json'
  );
  return (await res.json()) as Product[];
});

interface productInitialState {
  products: Product[];
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
}

const initialState: productInitialState = {
  products: [],
  loading: 'idle',
};

const productSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = action.meta.requestStatus;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = action.meta.requestStatus;
    });
  },
});

export { getProducts };

export default productSlice.reducer;
