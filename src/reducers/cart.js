import { CART } from "../actions/types";

const DEFAULT_CART = {
  items: [],
  count: 0,
};

const cartReducer = (state = DEFAULT_CART, action) => {
  let { item, type } = action;
  switch (type) {
    case CART.ADD: {
      let cartItems = [...state.items, item];
      return {
        ...state,
        items: cartItems,
        count: cartItems.length,
      };
    }
    case CART.REMOVE: {
      let { items } = state;
      const itemIndex = items.find((itm) => itm.id === item.id);
      if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
      }
      return {
        ...state,
        items: items,
        count: items.length,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
