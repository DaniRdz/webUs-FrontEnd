import {
  SET_ORDERS,
  CHANGE_STATUS_ORDER,
  DELETE_ORDER,
} from "../actions/types";

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

    case DELETE_ORDER:
      const _id = action.payload;
      var orders = state.orders.filter((order) => _id !== order._id);

      console.log(_id);
      return { ...state, orders };

    default:
      return state;
  }
}
