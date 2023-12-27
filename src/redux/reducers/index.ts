import { combineReducers } from 'redux';
import { OrderReducer } from './orders.ts';
import { CityReducer } from './cities.ts';
import citySlice from '../slices/citySlice.ts';

export const rootReducer: any = combineReducers({
  order: OrderReducer,
  city: CityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
