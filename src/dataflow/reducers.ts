import { createSlice } from '@reduxjs/toolkit';


const state = createSlice({
  name: 'state',
  initialState: [],
  reducers: {
    fixedNestedItemAdded: (state, action) => {
      state.push(action.payload)
    }
  
  },
});

export const { fixedNestedItemAdded} = state.actions;

export default state.reducer;
