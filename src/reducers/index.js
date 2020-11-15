import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import menu from "./menuReducer";

const rootReducer = combineReducers({
  form,
  menu,
});

export default rootReducer;
