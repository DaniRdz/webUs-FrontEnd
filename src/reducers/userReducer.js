import {
  ADD_CART_PRODUCT,
  REMOVE_CART_PRODUCT,
  SAVE_CART,
  SET_CART_PRODUCTS,
  SET_USER_INFO,
  UPDATE_CART,
} from "../actions/types";

const INITIAL_STATE = {
  cartProducts: [],
  user: {
    name: "",
    phone: "",
    addrees: "",
    cartProducts: "",
  },
  cartProductId: "",
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER_INFO:
      const { name, phone, address } = action.payload;
      const user = {
        name,
        phone,
        address,
        cartProducts: state.cartProductId,
      };
      return { ...state, user };

    case UPDATE_CART:
      console.log(action.payload);

      return { ...state };

    case SAVE_CART:
      console.log(action.payload);
      return { ...state, cartProductId: action.payload };

    case SET_CART_PRODUCTS:
      return { ...state, cartProducts: action.payload };

    case REMOVE_CART_PRODUCT:
      const pos = action.payload;
      var updateCart = [];
      state.cartProducts.splice(pos, 1);

      state.cartProducts.map((cartProduct) => {
        updateCart.push(cartProduct);
      });

      return { ...state, cartProducts: updateCart };

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
