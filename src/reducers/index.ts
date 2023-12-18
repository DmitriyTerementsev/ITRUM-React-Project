import { combineReducers } from "redux";
import { userReducer } from "./users.ts";

export const rootReducer = combineReducers({
  user: userReducer
})