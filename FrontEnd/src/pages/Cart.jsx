import React, { useContext, useMemo } from "react";
import { ShopContext } from "../contexts/shopContext";
import Title from "../Components/Title";
import CartItem from "../Components/CartItem";
import TotalCartAmount from "../Components/TotalCartAmount";
import "../CSS/Cart.css";

const Cart = () => {
  const { cartItems, navigate } = useContext(ShopContext);
  const cartData = useMemo(() => {
    const temp = [];
    for (const id in cartItems) {
      for (const size in cartItems[id]) {
        if (cartItems[id][size] > 0) {
          temp.push({ id, size, quantity: cartItems[id][size] });
        }
      }
    }
    return temp;
  }, [cartItems]);

  return (
    <div className="cart-container">
      <section>
        <Title text1={"YOUR"} text2={"CART"} />
      </section>

      {cartData.length > 0 ? (
        <>
          <section className="cart-items-list">
            {cartData.map((item) => (
              <CartItem key={`${item.id}-${item.size}`} itemData={item} />
            ))}
          </section>
          <div className="cart-bottom">
            <TotalCartAmount />
            <button
              className="proceed-button"
              onClick={() => navigate("/place-order")}
            >
              PROCEED TO CHECK OUT
            </button>
          </div>
        </>
      ) : (
        <p className="cart-empty">Cart is Empty</p>
      )}
    </div>
  );
};

export default Cart;
