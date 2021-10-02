import { PRODUCTS } from "../actions/types";
import fetchStates from "./fetchStates";

const DEFAULT_PRODUCTS = {
  products: [],
  fetchState: "",
};

const productReducer = (state = DEFAULT_PRODUCTS, action) => {
  switch (action.type) {
    case PRODUCTS.FETCH_SUCCESS:
      return {
        ...state,
        products: action.products,
        fetchState: fetchStates.success,
      };
    case PRODUCTS.FETCH_ERROR:
      return { ...state, products: [], fetchState: fetchStates.success };
    default:
      return state;
  }
};

export default productReducer;
