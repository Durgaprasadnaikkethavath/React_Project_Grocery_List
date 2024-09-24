import React from "react";
import "./GroceryList.css";

const GroceryList = ({ addToCart }) => {
  const GroceryList = [
    { id: 1, name: "Better", price: "2" },
    { id: 2, name: "Milk", price: "4" },
    { id: 3, name: "Bread", price: "6" },
  ];

  return (
    <div className="grocery_list_container">
      <h1 className="groceryList_title">GroceryList</h1>
      <ul className="groceryList_items">
        {GroceryList.map((item) => {
          return (
            <li className="groceryList_item_details">
              <p>
                {item.name}-${item.price}
              </p>
              <button onClick={() => addToCart(item)}>Add To Cart</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GroceryList;
