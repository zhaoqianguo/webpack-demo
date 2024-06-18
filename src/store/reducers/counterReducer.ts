import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter', // 作为action的第一部分，第二部分为reducers对象的key，例 'counter/increment'
  initialState: {
    value: 0,
  },
  reducers: {
    // 在 redux 中永远不允许在 reducer 中更改 state 的原始对象，这里是应为toolkit内部使用了immer最后还是immutable
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // action creator

export default counterSlice.reducer;

console.log(counterSlice.reducer({ value: 12 }, increment()));
