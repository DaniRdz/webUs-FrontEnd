import { ADD_CART_PRODUCT } from "./types";

export function addCartProduct(product) {
  return {
    type: ADD_CART_PRODUCT,
    payload: product,
  };
}
