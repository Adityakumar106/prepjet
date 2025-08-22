import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: null,
  purchases: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateProfileSuccess: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    fetchPurchasesSuccess: (state, action) => {
      state.purchases = action.payload;
    },
  },
});

export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
  updateProfileSuccess,
  fetchPurchasesSuccess,
} = userSlice.actions;

export default userSlice.reducer;