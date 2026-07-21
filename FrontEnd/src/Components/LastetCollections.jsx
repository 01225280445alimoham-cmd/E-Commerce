import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../contexts/shopContext";
import "../CSS/LatestCollection.css";
import ProductItem from "../Components/ProductItem";

//mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const LastetCollections = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setlatestProducts] = useState([]);

  useEffect(() => {
    setlatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="latest-collections" style={{ width: "100%" }}>
      <div className="latest-collections-header">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />

        <p className="latest-collections-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem error
          et laboriosam minima tempore enim, delectus, necessitatibus cupiditate
        </p>
      </div>

      <div style={{ width: "100%" }}>
        <div className="products-grid">
          {latestProducts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastetCollections;
