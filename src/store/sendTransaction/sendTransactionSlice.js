import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: [],
  error: ''
};

const sendTransaction = createSlice({
  name: 'sendTransaction',
  initialState,
  reducers: {
    sendTransactionRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    sendTransactionRequestSucces: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    sendTransactionRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  sendTransactionRequest,
  sendTransactionRequestSucces,
  sendTransactionRequestError,
} = sendTransaction.actions;

export default sendTransaction.reducer;
