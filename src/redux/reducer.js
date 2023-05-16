import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  id:1,
  description:"first task",
  isDone: false
}];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const newTodo ={
      id: Date.now(),
      description:action.payload,
      isDone: false
      }
      state.push(newTodo);
     
    },
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
           isDone: !todo.isDone,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } =
  addTodoReducer.actions;
export default addTodoReducer.reducer;
