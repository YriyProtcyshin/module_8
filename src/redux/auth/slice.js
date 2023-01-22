import { createSlice } from '@reduxjs/toolkit';

import { registerUser, logIn, logOut } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
