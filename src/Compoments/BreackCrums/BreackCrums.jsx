import React from "react";
import arrow from '../assets/arrow.png'

const BreackCrums = (props) => {
  const { product } = props;
  return (
    <div className="flex items-center gap-[8px] text-[#5c5c5c] text-[16px] font-[600] my-[30px] mx-[170px] capitalize ">
      HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" />{" "}
      {product.category} <img src={arrow} alt="" /> {product.name}
    </div>
  );
};

export default BreackCrums;
