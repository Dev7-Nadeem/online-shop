import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllProducts } from "../../actions/product";
import Product from "./Product";
import "./product.css";

function Products({ fetchAllProducts, products }) {
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="flex-row flex-wrap">
      {products.map((prod) => (
        <Product key={prod.id} product={prod} />
      ))}
    </div>
  );
}

export default connect((state) => ({ products: state.product.products }), {
  fetchAllProducts,
})(Products);
