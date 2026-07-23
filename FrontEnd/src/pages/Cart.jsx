import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/shopContext";
import Title from "../Components/Title";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
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
    <div>
      <section>
        <Title text1={"YOUR"} text2={"CART"} />
      </section>
      <section>
        {cartData.map((item) => (
          <CartItem key={`${item.id}-${item.size}`} itemData={item} />
        ))}
      </section>
    </div>
  ) : (
    <h1>No Data found</h1>
  );
};

export default Cart;
