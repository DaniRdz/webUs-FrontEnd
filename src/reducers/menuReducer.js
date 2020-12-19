import {
  SET_MENU_PRODUCTS,
  SET_MENU_CATEGORIES,
  CHANGE_ACTIVE_LINK,
  FILTER_PRODUCTS_WITH_CATEGORY_ID,
} from "../actions/types";

const INIT_STATE = {
  menuProducts: [],
  categories: [],
  filteredProducts: [],
};

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case SET_MENU_PRODUCTS:
      return { ...state, menuProducts: action.payload };

    case SET_MENU_CATEGORIES:
      return { ...state, categories: action.payload };

    case CHANGE_ACTIVE_LINK:
      const categories = state.categories.map((link) => {
        link.active = false;
        if (link._id == action.payload) {
          link.active = true;
        }
        return link;
      });

      return { ...state, categories };

    case FILTER_PRODUCTS_WITH_CATEGORY_ID:
      var filteredProducts = [];
      state.menuProducts.map((product) => {
        if (product.belogsTo.includes(action.payload)) {
          filteredProducts.push(product);
        }
      });

      return { ...state, filteredProducts };

    default:
      return state;
  }
}
