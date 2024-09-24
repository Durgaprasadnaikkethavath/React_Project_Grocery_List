import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <>
      <div
        className="cart_store"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h1>Navbar GroceryList</h1>
        <div className="cart_icon">
          <h1>
            🛒
            <span className="cart_count">{cartCount}</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
