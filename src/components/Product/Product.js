import React from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { addToCard } from "./../../actions/cart";

function Product({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="card flex-col">
      <span>{product.title}</span>
      <span className="img-small flex-align-centre">
        <img
          style={{ height: "inherit", width: "inherit" }}
          src={product.image}
          alt={product.title}
        />
      </span>
      <span>$: {product.price} /-</span>
      <span>Available: {product.rating.count}</span>
      <button onClick={() => dispatch(addToCard(product))}>AddToCard</button>
    </div>
  );
}

export default Product;
