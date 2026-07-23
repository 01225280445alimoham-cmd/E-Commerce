import React, { useContext } from "react";
import "../CSS/CartItem.css";
import { ShopContext } from "../contexts/shopContext";
import { assets } from "../assets/frontend_assets/assets";

const CartItem = ({ itemData }) => {
  const { products, currency, updateQuantity, deleteCartItem } =
    useContext(ShopContext);

  const productData = products.find((item) => item._id === itemData.id);

  if (!productData) return null;

  return (
    <div className="container">
      <div className="cart-items-left-side">
        <div className="image-container">
          <img src={productData.image[0]} alt={productData.name} />
        </div>

        <div className="details">
          <h3>{productData.name}</h3>

          <div className="price-size">
            <p>
              {currency}
              {productData.price}
            </p>

            <span className="size">{itemData.size}</span>
          </div>
        </div>
      </div>

      <div className="cart-items-right-side">
        <div className="quantity">
          <input
            type="number"
            min="1"
            value={itemData.quantity}
            onChange={(e) =>
              e.target.value === "" || e.target.value === "0"
                ? null
                : updateQuantity(
                    itemData.id,
                    itemData.size,
                    Number(e.target.value),
                  )
            }
          />
        </div>

        <button
          className="remove-btn"
          onClick={() => {
            deleteCartItem(itemData.id, itemData.size);
          }}
        >
          <img src={assets.bin_icon} width={"25px"}></img>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
