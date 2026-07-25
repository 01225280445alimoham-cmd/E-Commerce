import React, { useContext } from "react";
import { ShopContext } from "../contexts/shopContext";
import Title from "./Title";
import "../CSS/TotalCartAmount.css";

const TotalCartAmount = () => {
  const { currency, deliveryFee, getTotalCartAmount, navigate } =
    useContext(ShopContext);

  const subtotal = getTotalCartAmount();
  const total = subtotal + deliveryFee;

  return (
    <section className="cart-totals">
      <div className="header">
        <Title text1="CART" text2="TOTALS" />
      </div>

      <div className="cart-totals-card">
        <div className="cart-row">
          <p>Subtotal</p>
          <span>
            {currency} {subtotal}.00
          </span>
        </div>

        <hr />

        <div className="cart-row">
          <p>Shipping Fee</p>
          <span>
            {currency} {deliveryFee}.00
          </span>
        </div>

        <hr />

        <div className="cart-row total-row">
          <p>Total</p>
          <span>
            {currency} {total}
          </span>
        </div>
      </div>
    </section>
  );
};

export default TotalCartAmount;
