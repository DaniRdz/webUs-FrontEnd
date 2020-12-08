import {
  ADD_CART_PRODUCT,
  REMOVE_CART_PRODUCT,
  SAVE_CART,
  SET_CART_PRODUCTS,
  SET_USER_INFO,
  UPDATE_CART,
  CREATE_ORDER,
  USER_REGISTER,
} from "../actions/types";

const INITIAL_STATE = {
  cartProducts: [],
  user: {
    name: "",
    phone: "",
    address: "",
    cartProducts: "",
  },
  cartProductId: "",
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_ORDER:
      console.log(action.payload);
      return { ...state };

    case USER_REGISTER:
      return { ...state };

    case SET_USER_INFO:
      const { _id, name, phone, address, cartProducts } = action.payload;
      const user = {
        _id,
        name,
        phone,
        address,
        cartProducts,
      };
      return { ...state, user };

    case UPDATE_CART:
      console.log(action.payload);

      return { ...state };

    case SAVE_CART:
      console.log(action.payload);
      return { ...state, cartProductId: action.payload };

    case SET_CART_PRODUCTS:
      var user = {
        name: "",
        phone: "",
        address: "",
        cartProducts: "",
      };
      const cartProductId = "";
      return { ...state, cartProducts: action.payload, user, cartProductId };

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
        cartProducts.unshift({
          product: newCP,
          quantity: 1,
        });
      }

      return { ...state, cartProducts: cartProducts };

    default:
      return state;
  }
}
