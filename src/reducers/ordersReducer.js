import { SET_ORDERS, CHANGE_STATUS_ORDER } from "../actions/types";

const INITIAL_STATE = {
  orders: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ORDERS:
      const orders = action.payload;
      console.log(action.payload);

      return { ...state, orders };

    case CHANGE_STATUS_ORDER:
      console.log(action.payload);
      return { ...state };

    default:
      return state;
  }
}
