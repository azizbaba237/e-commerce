import React from "react";
import data_product from "../assets/data";
import Items from "../Items/Items";

const RelateProduc = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[90vh] my-10 ">
      <h1 className="text-[text-[#171717] text-[50px] font-[600] ">
        Related Products
      </h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525] " />
      <div className="grid grid-cols-4 pt-[30px] gap-[30px]">
        {data_product.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelateProduc;
