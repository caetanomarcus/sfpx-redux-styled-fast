import { createSlice, current } from '@reduxjs/toolkit';
import { ISiteCurrentUser } from '../webparts/app/interfaces/IUserInfo';

export const state = createSlice({
  name: 'state',
  initialState: {
    listModulo: [],
    listCorredor: [],
    listComplexo: [],
    listFase: [],
    listCiclo: [],
  },
  reducers: {
    itemsAddModulo: (state, action) => {
      state.listModulo.push(action.payload);
      // console.log('current(stateModulo)', current(state));
    },
    itemsAddCorredor: (state, action) => {
      state.listCorredor.push(action.payload);
      // console.log("current(stateCorredor)", current(state))
    },
    itemsAddFase: (state, action) => {
      state.listFase.push(action.payload);
      // console.log("current(stateFase)", current(state))
    },
    itemsAddComplexo: (state, action) => {
      state.listComplexo.push(action.payload);
      // console.log("current(stateComplexo)", current(state))
    },
    itemsAddCiclo: (state, action) => {
      state.listCiclo.push(action.payload);
      // console.log("current(stateCiclo)", current(state))
    },
  },
});

let currentUser : ISiteCurrentUser;

export const stateObject = createSlice({
  name: 'stateObject',
  initialState: {currentUser},
  reducers: {
    itemAddCurrentInfo: (state, action) => {
      state.currentUser = action.payload;
      // console.log('current(stateObject)', current(state));
    },
  },
});

export const stateIsPermission= createSlice({
  name: 'stateIsPermission',
  initialState: { isValuePermission: false},
  reducers: {
    isItemAddValuePermission: (state, action) => {
      state.isValuePermission = action.payload;
      // console.log('current(stateObject)', current(state));
    },
  },
});

export const { itemsAddModulo, itemsAddCorredor, itemsAddComplexo, itemsAddFase, itemsAddCiclo } = state.actions;
export const { itemAddCurrentInfo } = stateObject.actions;

export const { isItemAddValuePermission } = stateIsPermission.actions;
