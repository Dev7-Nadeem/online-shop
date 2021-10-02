import { CART } from "./types";

export const addToCard = (item) => {
  return { type: CART.ADD, item };
};

export const removeFromCard = (item) => {
  return { type: CART.REMOVE, item };
};
