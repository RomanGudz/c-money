import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: {},
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
      state.data = action.data;
    }
  }
});

export default authSlice.reducer;
