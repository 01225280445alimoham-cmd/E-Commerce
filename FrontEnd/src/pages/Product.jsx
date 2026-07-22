import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/shopContext";
import { useParams } from "react-router-dom";
import "../CSS/Product.css";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../Components/RelatedProducts";

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
    <div>
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
        <main className="product-info">
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

          <section className="policys">
            <p>100% Original product</p>
            <p>Cash on delivry is avilable on this product</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </section>
        </main>
      </div>
      {/* Describtion and Review section  */}
      <section style={{ width: "100%", marginTop: "30px" }}>
        <div className="description-and-reviews">
          <b>Description</b>
          <p>Reviews</p>
        </div>
        <div className="description-about-the-web-site">
          <p>
            Our website offers a seamless online shopping experience with a wide
            range of high-quality products. Customers can browse categories,
            search for items, add products to their cart, and complete secure
            online purchases with ease.
          </p>
        </div>
      </section>

      <section>
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
          productId={productData._id}
        />
      </section>
    </div>
  ) : (
    <div className="loading">...Loading</div>
  );
};

export default Product;
