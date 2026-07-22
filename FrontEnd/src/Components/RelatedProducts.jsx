import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/shopContext";
import ProductItem from "./ProductItem";
import "../CSS/RelatedProducts.css";

const RelatedProducts = ({ category, subCategory, productId }) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filteredproducts = products.filter(
        (item) =>
          item.category === category &&
          item.subCategory == subCategory &&
          item._id !== productId,
      );
      setRelatedProducts(filteredproducts);
    }
  }, [category, subCategory, productId, products]);

  return relatedProducts.length > 0 ? (
    <section className="related-products">
      <h2>You May Also Like</h2>

      <div className="related-products-container">
        {relatedProducts.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </section>
  ) : null;
};

export default RelatedProducts;
