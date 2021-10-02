import React from "react";

function Item({ group }) {
  let { image, title, description, price } = group[0];
  return (
    <div class="flex-row">
      <img className="img-small" src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <h3>QTY:{group.length}</h3>
        <h3> Item Price: $ {price} </h3>
        <h4>Total:${price * group.length}</h4>
      </div>
    </div>
  );
}

export default Item;
