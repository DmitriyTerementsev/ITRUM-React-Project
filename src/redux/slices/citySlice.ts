import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type City = {
  id: string;
  name: string;
  address: string;
};

type CityState = {
  cities: City[];
};

const initialState: CityState = {
  cities: [],
};

const citySlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addCity(state, action: PayloadAction<string>) {
      state.cities.push({
        id: new Date().toISOString(),
        name: action.payload,
        address: action.payload,
      });
    },
    deleteCity(state, action: PayloadAction<string>) {
      state.cities = state.cities.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addCity, deleteCity } = citySlice.actions;

export default citySlice.reducer;
