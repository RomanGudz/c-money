import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: [],
  error: null
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
    },
    sendTransactionErrorForm: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  sendTransactionRequest,
  sendTransactionRequestSucces,
  sendTransactionRequestError,
  sendTransactionErrorForm,
} = sendTransaction.actions;

export default sendTransaction.reducer;
