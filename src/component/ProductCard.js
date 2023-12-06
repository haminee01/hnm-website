import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="item-card" onClick={showDetail}>
      <img src={item?.img} />
      <div className="choice">
        {item?.choice == true ? "Conscious choice" : ""}
      </div>
      <h5 className="title-product">{item?.title}</h5>
      <h5>₩{item?.price}</h5>
      <div className="new-product">{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
