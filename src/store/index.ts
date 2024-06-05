import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;


/**
 * 1. 先安装 react-redux @reduxjs/toolkit
 * 2. 通过 configureStore 创建 store
 * 3. 在入口文件处用 react-redux 提供的 <Provider store={store}><App /></Provider> 包裹
 * 4. 用reduxjs/toolkit 提供的 createSlice 创建 slice reducer
 * 5. 将 slice.reducer 添加到 store
 * 6. 即可食用
 */