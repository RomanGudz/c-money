import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: [],
  error: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    authRequestSucces: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    authRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  authRequest,
  authRequestSucces,
  authRequestError,
} = authSlice.actions;

export default authSlice.reducer;
