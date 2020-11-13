import { SET_MENU_PRODUCTS } from "../actions/types";

const INIT_STATE = {
  menuProducts: [],
};

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case SET_MENU_PRODUCTS:
      return { ...state, menuProducts: action.payload };

    default:
      return state;
  }
}
