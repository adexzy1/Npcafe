import { createSlice } from '@reduxjs/toolkit';
import { user } from '../Model';

interface userInterface {
  user: null | user;
}

const initialState: userInterface = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logOut } = userSlice.actions;

export default userSlice.reducer;
