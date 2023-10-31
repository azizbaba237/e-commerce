import React, { useContext } from "react";
import { ShopContext } from "../Context/Context";
import dropdown_icon from "../Compoments/assets/dropdown_icon.png";
import Items from "../Compoments/Items/Items";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-categroy">
      <img
        className="block my-[30px] mx-auto w-[82%] "
        src={props.banner}
        alt=""
      />
      <div className="flex my-[0px] mx-[120px] justify-between items-center ">
        <p className="font-[600]">
          <span className="font-[600]">Showing 1-12</span> out of 36 products
        </p>
        <div className="py-[10px] px-[20px] border-2 rounded-[40px]">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="my-[20px]  grid grid-cols-4 mx-[120px] gap-x-[75px] gap-y-8 ">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else null;
        })}
      </div>
      <div className="flex justify-center items-center my-[100px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-slate-100 text-zinc-400 text-[18px] font-[500] ">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
