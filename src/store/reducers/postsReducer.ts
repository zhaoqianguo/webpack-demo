import { createSlice } from '@reduxjs/toolkit';

type Post = {
  title: string;
  auth: string;
  time: string;
  content: string;
};

const initialState: Post[] = [];

export const postsSlice = createSlice({
  name: 'postsReducer',
  initialState,
  reducers: {
    addPost() {},
  },
});

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
