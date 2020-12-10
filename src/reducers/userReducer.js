import {
  ADD_CART_PRODUCT,
  REMOVE_CART_PRODUCT,
  SAVE_CART,
  SET_CART_PRODUCTS,
  SET_USER_INFO,
  UPDATE_CART,
  CREATE_ORDER,
  USER_REGISTER,
  USER_AUNTHENTICATE,
  USER_LOG_OUT,
  UPDATE_USER,
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
  isLoggin: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_ORDER:
      console.log(action.payload);
      return { ...state };

    case USER_REGISTER:
      return { ...state };

    case USER_AUNTHENTICATE:
      const { user, token } = action.payload;
      const { _id, name, address, phone } = user;
      const newUser = {
        _id,
        token,
        name,
        address,
        phone,
      };

      let isLoggin = false;
      const { status } = action.payload;
      if (status === "ok") {
        isLoggin = true;
      }

      return { ...state, isLoggin, user: newUser };

    case USER_LOG_OUT:
      var user = {
        name: "",
        phone: "",
        address: "",
        cartProducts: "",
      };
      var isLoggin = false;
      return { ...state, isLoggin, user };

    case SET_USER_INFO:
      var { _id, name, phone, address, cartProducts } = action.payload;
      var user = {
        _id,
        name,
        phone,
        address,
        cartProducts,
      };
      return { ...state, user };

    case UPDATE_USER:
      var { phone, address } = action.payload;
      var { _id, name, token } = state.user;
      const updateUser = {
        _id,
        token,
        name,
        address,
        phone,
      };
      return { ...state, user: updateUser };

    case UPDATE_CART:
      console.log(action.payload);

      return { ...state };

    case SAVE_CART:
      console.log(action.payload);
      return { ...state, cartProductId: action.payload };

    case SET_CART_PRODUCTS:
      const cartProductId = "";
      return { ...state, cartProducts: action.payload, cartProductId };

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
