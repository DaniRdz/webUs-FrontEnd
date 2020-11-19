import { ADD_CART_PRODUCT, SET_CART_PRODUCTS } from "../actions/types";

const INITIAL_STATE = {
  cartProducts: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CART_PRODUCTS:
      return { ...state, cartProducts: action.payload };

    case ADD_CART_PRODUCT:
      var exists = false;
      const newCP = action.payload;
      var cartProducts = [];

      state.cartProducts.map((cartProduct) => {
        if (cartProduct.product._id == newCP._id) {
          exists = true;
          cartProduct.quantity += 1;
        }
        cartProducts.push(cartProduct);
      });

      if (exists == false) {
        cartProducts.push({
          product: newCP,
          quantity: 1,
        });
      }

      return { ...state, cartProducts: cartProducts };

    default:
      return state;
  }
}
