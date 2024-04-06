import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  errorValid: '',
  token: '',
  error: '',
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    tokenRequest: (state) => {
      state.loading = true;
      state.errorValid = '';
      state.error = '';
    },
    tokenRequestSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.payload?.token;
      state.errorValid = action.payload.error;
    },
    tokenRequestError: (state, action) => {
      state.error = action;
      state.loading = false;
    }
  }
});

export const {
  tokenRequest,
  tokenRequestSuccess,
  tokenRequestError,
} = tokenSlice.actions;

export default tokenSlice.reducer;
