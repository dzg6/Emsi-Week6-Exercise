import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  donutQuantity: 0,
  order: {},
  total: 0,
  status: 'idle',
};


export const posSlice = createSlice({
  name: 'pos',
  initialState,

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state, action) => {
      state.donutQuantity += 1;
      if(state.order[action.payload.Name]){
      state.order[action.payload.Name] += 1;
      state.total += action.payload.Price;
      }else{
        state.order[action.payload.Name] = 1;
        state.total += action.payload.Price;
      }
    },
    decrement: (state, action) => {
      state.donutQuantity -= 1;
      if(state.order[action.payload.Name]){
      state.order[action.payload.Name] -= 1;
      state.total -= action.payload.Price;
      }else{
        state.order[action.payload.Name] = 0;
      }
    },
    clearOrder: (state) => {
      state.order = {};
      state.total = 0;
    },
  },

});

export const { increment, decrement, clearOrder } = posSlice.actions;

export const selectQuantity = (state) => state.pos.donutQuantity;
export const selectOrder = (state) => state.pos.order;
export const selectTotal = (state) => state.pos.total;


export default posSlice.reducer;
