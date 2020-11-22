import { combineReducers } from "redux";
import { signupReducer } from "./signupReducer";
import { loginReducer } from "./loginReducer";
import { chatReducer } from "./chatReducer";

export const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  chat: chatReducer,
});
