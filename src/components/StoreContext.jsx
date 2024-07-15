// src/CartContext.js
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FetchProduct, FetchSingleProduct } from "../constants/fetch";
// import FetchProduct from "../constants/fetch";

const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    "";
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
  const [products, setProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedPaymentIndex, setSelectedPaymentIndex] = useState(0);

  const handleChange = (index) => {
    setSelectedIndex(index);
  };

  const handlePaymentChange = (index) => {
    setSelectedPaymentIndex(index);
  };

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  useEffect(() => {
    // FetchProduct("products").then((data) => setCart(data.items));

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // console.log(cart);
  const navigate = useNavigate();

  const addToCart = (item) => {
    setCart((prevCart) => {
      const cartArray = prevCart || [];
      const existingItem = cartArray.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return cartArray.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...cartArray, { ...item, quantity: 1 }];
      }
    });
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
    if (editUserInfo) {
      if (
        isValidName(firstName) &&
        isValidName(lastName) &&
        isValidPhone(phoneNumber) &&
        isValidEmail(email)
      ) {
        setEditUserInfo(false);
      } else {
        alert("Please correct all fields before saving.");
      }
    } else {
      setEditUserInfo(true);
    }
  };

  const handleHomeChange = (event) => {
    setHome(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const isValidName = (name) => /^[a-zA-Z\s-]+$/.test(name);
  const isValidPhone = (phone) => /^\d+$/.test(phone);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    if (value === "" || isValidName(value)) {
      setFirstName(value);
    }
  };
  const handleLastNameChange = (e) => {
    const value = e.target.value;
    if (value === "" || isValidName(value)) {
      setLastName(value);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (value === "" || isValidPhone(value)) {
      setPhoneNumber(value);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const [isFavorite, setIsFavorite] = useState({});

  const toggleFavorite = (itemId) => {
    setIsFavorite((prevFavorites) => ({
      ...prevFavorites,
      [itemId]: !prevFavorites[itemId],
    }));
  };

  const [product, setProduct] = useState([]);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await FetchProduct("products", page);
        setProductList(data.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [page]);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const [filteredProducts, setFilteredProducts] = useState([]);

  // const { id } = useParams();
  const [extraData, setExtraData] = useState([]);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (productList) {
      const filtered = productList.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [productList, searchQuery]);

  const loadProductDetails = useCallback(async (id) => {
    try {
      setLoading(true);
      const data = await FetchSingleProduct(`products/${id}`);
      setProduct(data);
      setMainImage(data.photos[0].url);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleThumbnailClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  const isFormValid = () => {
    return (
      isValidName(firstName) &&
      isValidName(lastName) &&
      isValidPhone(phoneNumber) &&
      isValidEmail(email)
    );
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
        isSidebarOpen,
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
        products,
        updateProducts,
        product,
        setProduct,
        loading,
        setLoading,
        error,
        setError,
        page,
        setPage,
        handlePreviousPage,
        handleNextPage,
        filteredProducts,
        loadProductDetails,
        extraData,
        mainImage,
        handleThumbnailClick,
        productList,
        isValidName,
        isValidPhone,
        isValidEmail,
        isFormValid,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
