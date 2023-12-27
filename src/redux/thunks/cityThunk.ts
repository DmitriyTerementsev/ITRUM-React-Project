// import { getAllCities } from '../actions/cityActions.ts';
// import { CityActionTypes } from '../types/citiesTypes.ts';

// export const getCities = () => {
//   return (dispatch: (cities: { type: string; payload: any[] }) => void) => {
//     getAllCities()
//       .then((cities) => {
//         dispatch({ type: CityActionTypes.INIT_CITIES, payload: cities });
//       })
//       .catch((err) => console.log(err));
//   };
// };


import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodoList = createAsyncThunk('todo/fetch', async () => {
  const response = await axios.get('http://localhost:3000/user');
  return response.data;
})

export const addTodo = createAsyncThunk('todo/add', async (data) => {
    const response = await axios.post('http://localhost:3000/user', data);
    return response.data;
});

export const deleteTodo = createAsyncThunk('todo/delete', async (todo) => {
    await axios.delete(`http://localhost:3000/user/${todo.id}`);
    return todo;
});