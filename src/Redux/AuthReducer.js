import { createSlice } from '@reduxjs/toolkit';
import { auth, createUserWithEmailAndPassword } from 'firebase/auth';

const authReducer = createSlice({
  name: 'Authentication',
  initialState: {
    user: {},
  },

  reducers: {
    signUp: (state, action) => {
      const { email, password } = action.payload;
      createUserWithEmailAndPassword(auth, email, password).then(() => {});
    },
  },
});

export const { signUp } = authReducer.actions;
export default authReducer.reducer;
