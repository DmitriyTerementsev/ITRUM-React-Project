import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers/index.ts';

export default configureStore({
  reducer: rootReducer,
});
 