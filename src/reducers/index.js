import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import menu from "./menuReducer";
import user from "./userReducer";
import orders from "./ordersReducer";

const rootReducer = combineReducers({
  form,
  menu,
  user,
  orders,
});

export default rootReducer;
