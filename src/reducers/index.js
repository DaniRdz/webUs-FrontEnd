import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import menuProducts from "./menuProductsReducer";

const rootReducer = combineReducers({
  form,
  menuProducts,
});

export default rootReducer;
