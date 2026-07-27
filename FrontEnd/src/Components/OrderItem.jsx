import React from "react";
import { useShopContext } from "../contexts/shopContext";
import "../CSS/OrderItem.css";

const OrderItem = ({ item }) => {
  const { currency } = useShopContext();

  return (
    <div className="order-item">
      <div className="info-contianer">
        <div className="image-contianer">
          <img src={item.image[0]} alt={item.name} />
        </div>

        <div className="detials-contianer">
          <p className="item-name">{item.name}</p>
          <div className="row">
            <p>
              Price:
              {currency}
              {item.price}
            </p>
            <p>Quantity: 1</p>
            <p>Size: M</p>
          </div>
          <p className="item-date">
            Date: {new Date(item.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="status-container">
        <p className="status">Ready to ship</p>
        <button type="button" className="track-btn">
          Track Order
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
