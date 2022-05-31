import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getProducts = createAsyncThunk(
  'products/getProducts',
  async (ThunkApi) => {
    const res = fetch(
      'https://pizza-store-da4a5-default-rtdb.firebaseio.com/Products.json'
    ).then((data) => data.json());
    return res;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
  },

  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },
    [getProducts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export { getProducts };

export default productSlice.reducer;
