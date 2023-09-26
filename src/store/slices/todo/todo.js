import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({text: action.payload, completed: false});
    },
    toggleTodo: (state, action) => {
      const todoToToggle = state.find(
        (todo) => todo.text === action.payload.text
      );
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
      }
    },
    deleteTodo: (state, action) => {
     return state.filter(todo => todo.text !== action.payload)
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
