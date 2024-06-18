import { createSlice } from '@reduxjs/toolkit';

export type Todo = {
  id: number;
  value: string;
  completed: boolean;
};

export type ShowTodoType = 'all' | 'completed' | 'incomplete';

type InitialStateType = {
  todos: Todo[];
  showTodoType: ShowTodoType;
};

let id = 0;

export const todoListSlice = createSlice({
  name: 'todoListReducer',
  initialState: {
    todos: [],
    showTodoType: 'all',
  } satisfies InitialStateType as InitialStateType,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: (id += 1), value: action.payload, completed: false });
    },
    todoDone: (state, action) => {
      const { id } = action.payload as Todo;

      state.todos = state.todos.map((todo) => (todo.id === id ? { ...todo, completed: true } : todo));
    },
    changeShowTodoType: (state, action) => {
      state.showTodoType = action.payload;
    },
  },
});

export const { addTodo, todoDone, changeShowTodoType } = todoListSlice.actions;

export default todoListSlice.reducer;
