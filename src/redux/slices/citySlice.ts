import { createSlice } from "@reduxjs/toolkit";
import { fetchTodoList, addTodo, deleteTodo } from "../thunks/cityThunk";


let initialState = {
  isLoading: false,
  isError: null,
  data: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodoList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodoList.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    });

    builder.addCase(addTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    });

    builder.addCase(deleteTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter(ele => ele.id !== action.payload.id);
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    });

    builder.addCase(editTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.map(ele => {
        if (ele.id === action.payload.id) {
          return {
            ...ele,
            ...action.payload
          }
        }
        return ele;
      })
    });
    builder.addCase(editTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    });
  },
});

export default todoSlice.reducer;