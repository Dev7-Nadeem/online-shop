import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import Item from "./Item";
import "./cart.css";

function Cart() {
  let items = useSelector((state) => state.cart.items);
  let groupedItems = _.groupBy(items, (item) => item.id);
  let subTotal = _.sumBy(items, (itm) => itm.price);
  return (
    <>
      {Object.keys(groupedItems).length === 0 ? (
        <></>
      ) : (
        <div className="flex-row">
          <div className="cart-details">
            <h2>Shopping Cart</h2>
            {Object.keys(groupedItems).map((group) => (
              <Item
                key={groupedItems[group][0].id}
                group={groupedItems[group]}
              />
            ))}
          </div>
          <div className="total-pane">
            <h2>Sub Total</h2>
            <h2>item QTY:{items.length}</h2>
            <h2>Subtotal : {subTotal.toFixed(2)} </h2>
            <button>Proceed to buy</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
