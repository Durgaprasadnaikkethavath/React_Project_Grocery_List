import React, { useState } from "react";
import Navbar from "./Navbar";
import GroceryList from "./GroceryList";
import Cart from "./Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCartButton, setShowCartButton] = useState(false);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    showDetails();
  };

  const showDetails = () => {
    console.log(cart);

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    console.log(cartCount);
  };

  const UpDateQuantity = (itemId, amount) => {
    // setCart(
    //   ...cart
    //     .map((cartItem) =>
    //       cartItem.id === itemId.id
    //         ? { ...cartItem, quantity: cartItem.quantity + amount }
    //         : cartItem
    //     )
    //     .filter((cartItem) => cartItem.quantity > 0)
    // );

    setCart(
      cart
        .map((cartItem) => {
          if (cartItem.id === itemId) {
            const newQuantity = cartItem.quantity + amount;
            return newQuantity > 0
              ? { ...cartItem, quantity: newQuantity }
              : null;
          }
          return cartItem;
        })
        .filter(Boolean)
    );
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <GroceryList addToCart={addToCart} />
      <Cart cartItem={cart} UpDateQuantity={UpDateQuantity} />
    </>
  );
};

export default App;
