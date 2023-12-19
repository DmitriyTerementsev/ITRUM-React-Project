import { combineReducers } from 'redux';
import { userReducer } from './users.ts';
import { BrandReducer } from './brands.ts';

export const rootReducer = combineReducers({
  user: userReducer,
  brand: BrandReducer
});

export type RootState = ReturnType<typeof rootReducer>;
