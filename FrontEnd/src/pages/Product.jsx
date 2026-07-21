import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/shopContext";
import { useParams } from "react-router-dom";
import "../CSS/Product.css";
import { assets } from "../assets/frontend_assets/assets";

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState();
  const [selectedImage, setSelectedImage] = useState();

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

  return (
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
          <img src={assets.star_icon} alt="star icon" width={"30px"} />
          <img src={assets.star_icon} alt="star icon" width={"30px"} />
          <img src={assets.star_icon} alt="star icon" width={"30px"} />
          <img src={assets.star_icon} alt="star icon" width={"30px"} />
          <img src={assets.star_icon} alt="star icon" width={"30px"} />
        </div>
      </div>
    </div>
  );
};

export default Product;
