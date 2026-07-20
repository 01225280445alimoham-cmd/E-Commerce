import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/shopContext";
import { useParams } from "react-router-dom";

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState();

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);

    if (product) {
      console.log(product);
      setProductData(product);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return <div></div>;
};

export default Product;
