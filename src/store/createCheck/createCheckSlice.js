import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: {},
  error: ''
};

const createCheck = createSlice({
  name: 'createCheck',
  initialState,
  reducers: {
    createCheckRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    createCheckRequestSucces: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    createCheckRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  createCheckRequest,
  createCheckRequestSucces,
  createCheckRequestError,
} = createCheck.actions;

export default createCheck.reducer;
