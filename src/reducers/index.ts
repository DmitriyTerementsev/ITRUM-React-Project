import { combineReducers } from 'redux';
import { userReducer } from './users.ts';
import { BrandReducer } from './brands.ts';
import { CategoryReducer } from './category.ts';

export const rootReducer = combineReducers({
  user: userReducer,
  brand: BrandReducer,
  category: CategoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
