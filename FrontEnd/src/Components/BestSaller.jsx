import React from "react";
import "../CSS/BestSaller.css";
import Title from "./Title";
import { ShopContext } from "../contexts/shopContext";
import { useState, useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ProductItem from "../Components/ProductItem";

const BestSaller = () => {
  const { products } = useContext(ShopContext);
  const [bestSallers, setbestSallers] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((p) => p.bestseller);
    setbestSallers(bestProducts);
  }, []);

  return (
    <div className="best-sallers">
      <div className="header">
        <Title text1={"BEST"} text2={"SALLERS"} />
        <p className="best-sallers-collections-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem error
          et laboriosam minima tempore enim, delectus, necessitatibus cupiditate
        </p>
      </div>

      <div style={{ width: "100%" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          sx={{
            justifyContent: "center",
          }}
        >
          {bestSallers.map((item) => (
            <Grid key={item._id} size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
              <ProductItem
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default BestSaller;
