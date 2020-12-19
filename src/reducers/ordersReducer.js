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

      return { ...state, orders };

    case CHANGE_STATUS_ORDER:
      var orders = [];
      state.orders.map((order) => {
        if (order._id === action.payload) {
          if (order.orderStatus === "wait") {
            order.orderStatus = "redy";
          } else {
            order.orderStatus = "wait";
          }
        }
        orders.push(order);
      });
      return { ...state, orders };

    case DELETE_ORDER:
      const _id = action.payload;
      var orders = state.orders.filter((order) => _id !== order._id);

      return { ...state, orders };

    default:
      return state;
  }
}
