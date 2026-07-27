import React, { useContext } from "react";
import "../CSS/CartItem.css";
import { ShopContext } from "../contexts/shopContext";
import { assets } from "../assets/frontend_assets/assets";

const CartItem = ({ itemData }) => {
  const { products, currency, updateQuantity, deleteCartItem } =
    useContext(ShopContext);

  const productData = products.find((item) => item._id === itemData.id);

  if (!productData) return null;

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === "") return; // نسيب المستخدم يمسح الحقل مؤقتًا وهو بيكتب رقم جديد

    const quantity = Number(value);
    if (!Number.isInteger(quantity) || quantity < 1) return;

    updateQuantity(itemData.id, itemData.size, quantity);
  };

  return (
    <div className="cart-item">
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
            step="1"
            value={itemData.quantity}
            onChange={handleQuantityChange}
            aria-label={`Quantity for ${productData.name}, size ${itemData.size}`}
          />
        </div>

        <button
          type="button"
          className="remove-btn"
          onClick={() => deleteCartItem(itemData.id, itemData.size)}
          aria-label={`Remove ${productData.name} from cart`}
        >
          <img src={assets.bin_icon} alt="" className="remove-icon" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
