import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  allCurrencies: [],
  currencies: {},
  currencyFeed: {},
  error: null
};

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    exchangeRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    exchangeRequestSucces: (state, action) => {
      state.loading = false;
      state.allCurrencies = action.payload.allCurrencies;
      state.currencies = action.payload.currencies;
    },
    exchangeRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    exchangeBuyRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    exchangeBuyRequestSucces: (state, action) => {
      state.loading = false;
      state.currencies = action.payload;
    },
    exchangeBuyErrorForm: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const {
  exchangeRequest,
  exchangeRequestSucces,
  exchangeRequestError,
  exchangeBuyRequest,
  exchangeBuyRequestSucces,
  exchangeBuyErrorForm
} = exchangeSlice.actions;

export default exchangeSlice.reducer;
