import { PRODUCTS } from "./types";

const API_BASE_URL = "https://fakestoreapi.com";

export const fetchAllProducts = () => (dispatch) => {
  return fetch(`${API_BASE_URL}/products`)
    .then((res) => {
      if (res.status !== 200) throw new console.error("unsuccessful fetch.");
      return res.json();
    })
    .then((products) => {
      console.log(products);
      dispatch({ type: PRODUCTS.FETCH_SUCCESS, products });
    })
    .catch((err) => dispatch({ type: PRODUCTS.FETCH_ERROR }));
};
