import { createSlice } from '@reduxjs/toolkit';

const saveToLocalStorage = (payload) => {
  localStorage.setItem('cartItems', JSON.stringify(payload));
};

const cartReducer = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    totalQuantity: 0,
    totalPrice: 0,
    toggleState: false,
  },

  reducers: {
    addToCart: (state, action) => {
      const exist = state.cartItems.find((x) => x.id === action.payload.id);
      if (exist) {
        exist.qty += 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
      saveToLocalStorage(state.cartItems);
    },

    reduceItem: (state, action) => {
      const exist = state.cartItems.find((x) => x.id === action.payload.id);

      if (exist.qty <= 1) {
        const products = state.cartItems.filter(
          (x) => x.id !== action.payload.id
        );
        state.cartItems = products;
      } else {
        exist.qty -= 1;
      }
      saveToLocalStorage(state.cartItems);
    },

    removeItem: (state, action) => {
      const product = state.cartItems.filter((x) => x.id !== action.payload.id);
      state.cartItems = product;
      saveToLocalStorage(state.cartItems);
    },

    getTotals: (state) => {
      const { price, quantity } = state.cartItems.reduce(
        (cartTotals, carItems) => {
          const { price, qty } = carItems;
          const totalItems = price * qty;

          cartTotals.price += totalItems;
          cartTotals.quantity += qty;

          return cartTotals;
        },
        {
          price: 0,
          quantity: 0,
        }
      );

      state.totalPrice = price;
      state.totalQuantity = quantity;
    },

    toggleCart: (state, action) => {
      state.toggleState = action.payload;
      switch (state.toggleState) {
        case false:
          document.body.style.overflowY = 'scroll';
          break;
        case true:
          document.body.style.overflowY = 'hidden';
          break;
        default:
          document.body.style.overflowY = 'scroll';
      }
    },
  },
});

export const { addToCart, reduceItem, removeItem, getTotals, toggleCart } =
  cartReducer.actions;
export default cartReducer.reducer;
