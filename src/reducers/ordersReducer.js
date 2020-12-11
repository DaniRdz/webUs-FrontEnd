import { SET_ORDERS } from "../actions/types";

const INITIAL_STATE = {
  orders: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ORDERS:
      const orders = action.payload;

      return { ...state, orders };

    default:
      return state;
  }
}
