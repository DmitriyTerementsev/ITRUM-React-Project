import { combineReducers } from 'redux';
import { userReducer } from './users.ts';

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
