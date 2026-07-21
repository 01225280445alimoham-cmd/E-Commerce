import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/shopContext";
import { useParams } from "react-router-dom";
import "../CSS/Product.css";
import { assets } from "../assets/frontend_assets/assets";

const Product = () => {
  const { products, currency } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductData(product);
      setSelectedImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="grid">
      <div className="images-contianer">
        {productData?.image?.map((i, index) => (
          <img
            key={index}
            src={i}
            alt=""
            width={"150px"}
            onClick={() => {
              setSelectedImage(i);
            }}
            className={selectedImage === i ? "active-image" : ""}
          ></img>
        ))}
      </div>
      <div className="selected-image">
        <img src={selectedImage} width={"100%"}></img>
      </div>
      <div className="product-info">
        <h1 style={{ fontWeight: "normal" }}>{productData?.name}</h1>
        <div className="rating">
          <img src={assets.star_icon} alt="star icon" />
          <img src={assets.star_icon} alt="star icon" />
          <img src={assets.star_icon} alt="star icon" />
          <img src={assets.star_icon} alt="star icon" />
          <img src={assets.star_icon} alt="star icon" />
        </div>
        <p className="price">
          {currency}
          {productData?.price}
        </p>
        <p className="description"> {productData?.description}</p>
        <div className="sies-contianer">
          {productData?.sizes?.map((item, index) => (
            <button
              className={`size ${item === size ? "selected-size" : ""}`}
              onClick={() => setSize(item)}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
        <button className="add-to-cart-button">ADD TO CART</button>

        <div className="policys">
          <p>100% Original product</p>
          <p>Cash on delivry is avilable on this product</p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="loading">...Loading</div>
  );
};

export default Product;
