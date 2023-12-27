import { combineReducers } from 'redux';
import { OrderReducer } from './orders.ts';
import citySlice from '../slices/citySlice.ts';

export const rootReducer: any = combineReducers({
  order: OrderReducer,
  city: citySlice,
});

export type RootState = ReturnType<typeof rootReducer>;
