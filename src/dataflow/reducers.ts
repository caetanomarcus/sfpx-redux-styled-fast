import { createSlice } from '@reduxjs/toolkit';

const state = createSlice({
  name: 'state',
  initialState: [],
  reducers: {
    itemsAddModulo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { itemsAddModulo } = state.actions;

export default state.reducer;
