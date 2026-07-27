import React, { useContext, useEffect, useMemo, useState } from "react";
import { ShopContext } from "../contexts/shopContext";
import { useParams } from "react-router-dom";
import "../CSS/Product.css";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../Components/RelatedProducts";

const Product = () => {
  const { products, currency, addToCart } = useContext(ShopContext);
  const { productId } = useParams();

  const [selectedImage, setSelectedImage] = useState(null);
  const [size, setSize] = useState("");
  const [activeTab, setActiveTab] = useState("description");

  const productData = useMemo(
    () => products.find((item) => item._id === productId),
    [products, productId],
  );

  useEffect(() => {
    if (productData) {
      setSelectedImage(productData.image[0]);
      setSize(""); // إعادة ضبط المقاس المختار عند تغيير المنتج
      setActiveTab("description");
    }
  }, [productData]);

  const handleAddToCart = () => {
    addToCart(productData._id, size);
  };

  if (!productData) {
    // لو المنتجات لسه بتتحمل (فاضية) نعرض Loading، غير كده المنتج مش موجود
    if (products.length === 0) {
      return <div className="loading">...Loading</div>;
    }
    return <div className="not-found">Product not found</div>;
  }

  return (
    <div>
      <div className="grid">
        <div className="images-contianer">
          {productData.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${productData.name} - view ${index + 1}`}
              width={"150px"}
              onClick={() => setSelectedImage(img)}
              className={selectedImage === img ? "active-image" : ""}
            />
          ))}
        </div>

        <div className="selected-image">
          <img src={selectedImage} alt={productData.name} width={"100%"} />
        </div>

        <main className="product-info">
          <h1 className="product-name">{productData.name}</h1>

          <div className="rating" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <img key={i} src={assets.star_icon} alt="" />
            ))}
          </div>

          <p className="price">
            {currency}
            {productData.price}
          </p>

          <p className="description">{productData.description}</p>

          <div className="sies-contianer">
            {productData.sizes?.map((item, index) => (
              <button
                type="button"
                key={index}
                className={`size ${item === size ? "selected-size" : ""}`}
                onClick={() => setSize(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="add-to-cart-button"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>

          <section className="policys">
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </section>
        </main>
      </div>

      {/* Description and Reviews section */}
      <section className="description-section">
        <div className="description-and-reviews">
          <button
            type="button"
            className={activeTab === "description" ? "active-tab" : ""}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            type="button"
            className={activeTab === "reviews" ? "active-tab" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        {activeTab === "description" ? (
          <div className="description-about-the-web-site">
            <p>
              Our website offers a seamless online shopping experience with a
              wide range of high-quality products. Customers can browse
              categories, search for items, add products to their cart, and
              complete secure online purchases with ease.
            </p>
          </div>
        ) : (
          <div className="reviews-section">
            <p>No reviews yet.</p>
          </div>
        )}
      </section>

      <section>
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
          productId={productData._id}
        />
      </section>
    </div>
  );
};

export default Product;
