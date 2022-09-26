import { configureStore } from '@reduxjs/toolkit';
import { state, stateIsPermission, stateObject } from './reducers';

export const store = configureStore({
  reducer: {
    state: state.reducer,
    stateObject: stateObject.reducer,
    stateIsPermission: stateIsPermission.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

export type AppDispatch = typeof store.dispatch;
