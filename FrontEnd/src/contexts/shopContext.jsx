import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("You must select a product size first");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
      toast.success("Product added successfuly");
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
      toast.success("Product added successfuly");
    }
    setCartItems(cartData);
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
    if (quantity == 0) {
      return;
    }

    let temp = structuredClone(cartItems);

    temp[id][size] = quantity;

    setCartItems(temp);
  };

  const deleteCartItem = (id, size) => {
    const temp = structuredClone(cartItems);

    delete temp[id][size];

    if (Object.keys(temp[id]).length === 0) {
      delete temp[id];
    }

    setCartItems(temp);
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
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
