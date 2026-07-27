import React, { useContext, useMemo } from "react";
import "../CSS/BestSaller.css";
import Title from "./Title";
import { ShopContext } from "../contexts/shopContext";
import ProductItem from "../Components/ProductItem";

const BestSaller = () => {
  const { products } = useContext(ShopContext);

  const bestSellers = useMemo(
    () => products.filter((p) => p.bestseller),
    [products],
  );

  return (
    <div className="best-sallers">
      <div className="best-sallers-header">
        <Title text1={"BEST"} text2={"SALLERS"} />
        <p className="best-sallers-collections-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem error
          et laboriosam minima tempore enim, delectus, necessitatibus cupiditate
        </p>
      </div>

      <div className="products-grid">
        {bestSellers.map((item) => (
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
  );
};

export default BestSaller;
