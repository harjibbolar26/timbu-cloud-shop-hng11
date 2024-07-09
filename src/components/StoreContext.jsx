// src/CartContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [expanded, setExpanded] = useState({
    type: true,
    colour: true,
    price: true,
    otherItems: true,
    specialFeatures: true,
    availableOffer: true,
    applyCoupons: true,
  });

  const [price, setPrice] = useState([20, 80]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedPaymentIndex, setSelectedPaymentIndex] = useState(0);

  const handleChange = (index) => {
    setSelectedIndex(index);
  };

  const handlePaymentChange = (index) => {
    setSelectedPaymentIndex(index);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    // navigate("/cart");
  };

  const updateQuantity = (itemToUpdate, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === itemToUpdate.id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handlePriceChange = (event, newPrice) => {
    setPrice(newPrice);
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        setCart,
        expanded,
        setExpanded,
        toggleSection,
        price,
        setPrice,
        handlePriceChange,
        handleChange,
        selectedIndex,
        selectedPaymentIndex,
        handlePaymentChange,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
