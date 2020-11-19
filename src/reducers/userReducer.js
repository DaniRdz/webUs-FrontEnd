import actions from "redux-form/lib/actions";
import { ADD_CART_PRODUCT } from "../actions/types";

const INITIAL_STATE = {
  cartProducts: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CART_PRODUCT:
      console.log(action.payload);

      return { ...state };

    default:
      return state;
  }
}
