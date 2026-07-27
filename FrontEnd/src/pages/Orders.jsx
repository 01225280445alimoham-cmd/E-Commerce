import React from "react";
import { useShopContext } from "../contexts/shopContext";
import Title from "../Components/Title";
import OrderItem from "../Components/OrderItem";

const Orders = () => {
  const { products } = useShopContext();
  return (
    <div>
      <div>
        <Title text1={"My"} text2={"Orders"} />
      </div>
      <div>
        {products.slice(0, 5).map((item, index) => {
          return <OrderItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
