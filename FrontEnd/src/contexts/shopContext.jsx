import { createContext, useState, useContext } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("You must select a product size first");
      return;
    }

    const cartData = structuredClone(cartItems);
    cartData[itemId] = cartData[itemId] || {};
    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

    setCartItems(cartData);
    toast.success("Product added successfully"); // صح الخطأ الإملائي
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalCount += cartItems[items][item];
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = (id, size, quantity) => {
    if (quantity <= 0) return; // كمان لازم تتأكد إنها مش رقم سالب
    if (!cartItems[id]) return;

    const temp = structuredClone(cartItems);
    temp[id][size] = quantity;
    setCartItems(temp);
  };

  const deleteCartItem = (id, size) => {
    if (!cartItems[id]) return;

    const temp = structuredClone(cartItems);
    delete temp[id][size];

    if (Object.keys(temp[id]).length === 0) {
      delete temp[id];
    }

    setCartItems(temp);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let productInfo = products.find((product) => product._id === items);
      if (!productInfo) continue;
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalAmount += productInfo.price * cartItems[items][item];
        }
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    deleteCartItem,
    getTotalCartAmount,
    navigate,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => useContext(ShopContext);

export default ShopContextProvider;
