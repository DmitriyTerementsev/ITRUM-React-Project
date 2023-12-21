//import { configureStore } from '@reduxjs/toolkit';
//import { rootReducer } from '../reducers/index.ts';

// export default configureStore({
//   reducer: rootReducer,
// });
import { createStore } from 'redux';

const initial = [
  { name: 'Learn Html', id: 1 },
  { name: 'Learn CSS', id: 2 },
];

function MyApplication(state = initial, action) {
  console.log(action);
  if (action.type === 'add') {
    return [...state, action.payload];
  } else if (action.type === 'delete') {
    const UpdatedData = state.filter((each) => each.id !== action.payload);
    return [...UpdatedData];
  }
  return state;
}

export const store = createStore(MyApplication);
