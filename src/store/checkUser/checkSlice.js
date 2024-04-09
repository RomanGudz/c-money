import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: [],
  error: ''
};

const checkSlice = createSlice({
  name: 'check',
  initialState,
  reducers: {
    checkRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    checkRequestSucces: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    checkRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  checkRequest,
  checkRequestSucces,
  checkRequestError,
} = checkSlice.actions;

export default checkSlice.reducer;
