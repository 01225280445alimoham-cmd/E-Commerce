import React, { useContext } from "react";
import { ShopContext } from "../contexts/shopContext";
import { Link } from "react-router-dom";
import "../CSS/ProductItem.css";

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="product-item">
      <div className="product-image-container">
        <img src={image[0]} alt={name} className="product-image" />
      </div>

      <p className="product-name">{name}</p>

      <p className="product-price">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
