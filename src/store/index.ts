/**
 * react-redux
 * 1. 先安装 react-redux @reduxjs/toolkit
 * 2. 通过 configureStore 创建 store
 * 3. 在入口文件处用 react-redux 提供的 <Provider store={store}><App /></Provider> 包裹
 * 4. 用reduxjs/toolkit 提供的 createSlice 创建 slice reducer
 * 5. 将 slice.reducer 添加到 store
 * 6. 即可食用
 */

import { configureStore, legacy_createStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';
import todoListReducer from './reducers/todoListReducer';
import postsReducer from './reducers/postsReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoListReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

/**
 * redux
 */

const countReducer = (state = { value: 0 }, action: { type: any }) => {
  switch (action.type) {
    case 'counter/incremented':
      state.value + 1;
      return state;
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export const reduxStore = legacy_createStore(countReducer);
