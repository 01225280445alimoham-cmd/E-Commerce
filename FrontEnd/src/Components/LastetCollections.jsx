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
    <div className="latest-collections">
      <div className="latest-collections-header">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />

        <p className="latest-collections-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem error
          et laboriosam minima tempore enim, delectus, necessitatibus cupiditate
        </p>
      </div>

      <div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          sx={{
            justifyContent: "center",
          }}
        >
          {latestProducts.map((item) => (
            <Grid key={item._id} size={{ xs: 6, sm: 6, md: 4, lg: 3 }}>
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

export default LastetCollections;
