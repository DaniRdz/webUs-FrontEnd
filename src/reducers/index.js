import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import menu from "./menuReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  form,
  menu,
  user,
});

export default rootReducer;
