import {
  SET_MENU_PRODUCTS,
  SET_MENU_CATEGORIES,
  CHANGE_ACTIVE_LINK,
} from "../actions/types";

const INIT_STATE = {
  menuProducts: [],
  categories: [],
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

    default:
      return state;
  }
}
