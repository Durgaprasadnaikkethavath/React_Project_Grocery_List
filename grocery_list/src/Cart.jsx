import React from "react";

const Cart = ({ cartItem, UpDateQuantity }) => {
  return (
    <>
      <h1>Cart Store</h1>

      {cartItem.length === 0 ? (
        <p>The Cart is Empty</p>
      ) : (
        <ul>
          {cartItem.map((item) => (
            <li>
              <span>{item.name}</span>
              <div className="quantity_controls">
                <button onClick={() => UpDateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => UpDateQuantity(item.id, 1)}>+</button>
              </div>
              <span>{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cart;
