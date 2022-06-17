import { createSlice } from '@reduxjs/toolkit';
import { cartItems } from '../Model';

const saveToLocalStorage = (payload: cartItems[]) => {
  localStorage.setItem('cartItems', JSON.stringify(payload));
};

interface CartinitialState {
  cartItems: cartItems[];
  totalQuantity: number;
  totalPrice: number;
  toggleState: boolean;
}

const local_cartItems = localStorage.getItem('cartItems');

const initialState: CartinitialState = {
  cartItems: local_cartItems ? JSON.parse(local_cartItems) : [],
  totalQuantity: 0,
  totalPrice: 0,
  toggleState: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const exist = state.cartItems.find(
        (x: cartItems) => x.id === action.payload.id
      );
      if (exist) {
        exist.qty += 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
      saveToLocalStorage(state.cartItems);
    },

    reduceItem: (state, action) => {
      const exist = state.cartItems.find((x) => x.id === action.payload.id);

      if (exist!.qty <= 1) {
        const products = state.cartItems.filter(
          (x) => x.id !== action.payload.id
        );
        state.cartItems = products;
      } else {
        exist!.qty -= 1;
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
  },
});

export const { addToCart, reduceItem, removeItem, getTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
