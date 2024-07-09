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
    alert("Item added to cart");
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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
    console.log("Toggled sidebar");
    // alert("ok")
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editUserInfo, setEditUserInfo] = useState(false);
  const [home, setHome] = useState("Home");
  const [phone, setPhone] = useState("(+234)7010901695");
  const [address, setAddress] = useState("1234, Heaven's Street");
  const [firstName, setFirstName] = useState("Promise");
  const [lastName, setLastName] = useState("Jibola");
  const [phoneNumber, setPhoneNumber] = useState("08112345678");
  const [email, setEmail] = useState("hotgirl@mail.com");

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const toggleEditUserInfo = () => {
    setEditUserInfo(!editUserInfo);
  };

  const handleHomeChange = (event) => {
    setHome(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [isFavorite, setIsFavorite] = useState({});

  const toggleFavorite = (itemId) => {
    setIsFavorite(prevFavorites => ({
      ...prevFavorites,
      [itemId]: !prevFavorites[itemId]
    }));
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
        setIsSidebarOpen,
        toggleSidebar,
        searchQuery,
        handleSearchChange,
        handleClearSearch,
        isEditing,
        home,
        phone,
        address,
        toggleEditMode,
        handleHomeChange,
        handleAddressChange,
        handlePhoneChange,
        isFavorite,
        toggleFavorite,
        firstName,
        lastName,
        phoneNumber,
        email,
        editUserInfo,
        toggleEditUserInfo,
        handleFirstNameChange,
        handleLastNameChange,
        handlePhoneNumberChange,
        handleEmailChange,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
