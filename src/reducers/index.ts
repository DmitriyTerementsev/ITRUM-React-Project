import { combineReducers } from 'redux';
import { userReducer } from './users.ts';
import { BrandReducer } from './brands.ts';
import { CategoryReducer } from './category.ts';
import { SubCategoryReducer } from './subCategory.ts';

export const rootReducer = combineReducers({
  user: userReducer,
  brand: BrandReducer,
  category: CategoryReducer,
  subCategory: SubCategoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
