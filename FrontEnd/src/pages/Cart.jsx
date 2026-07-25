import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/shopContext";
import Title from "../Components/Title";
import CartItem from "../Components/CartItem";
import TotalCartAmount from "../Components/TotalCartAmount";
import "../CSS/Cart.css";

const Cart = () => {
  const { cartItems, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let temp = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          temp.push({
            id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(temp);
  }, [cartItems]);

  return cartData.length > 0 ? (
    <div className="cart-container">
      <section>
        <Title text1={"YOUR"} text2={"CART"} />
      </section>
      <section className="cart-items-list">
        {cartData.map((item) => (
          <CartItem key={`${item.id}-${item.size}`} itemData={item} />
        ))}
      </section>
      <div className="cart-bottom">
        <TotalCartAmount />
        <button
          className="proceed-button"
          onClick={() => {
            navigate("/place-order");
          }}
        >
          PROCEED TO CHECK OUT
        </button>
      </div>
    </div>
  ) : (
    <h1 className="cart-empty">Cart is Empty</h1>
  );
};

export default Cart;
