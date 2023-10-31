import React, { useContext } from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/Context";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="flex my-[0px] mx-[30px] mb-12 ">
      <div className="flex gap-[17px] ">
        <div className="flex flex-col gap-[16px] ">
          <img className="h-[150px] w-[400px] " src={product.image} alt="" />
          <img className="h-[150px] w-[400px] " src={product.image} alt="" />
          <img className="h-[150px] w-[400px] " src={product.image} alt="" />
          <img className="h-[150px] w-[400px] " src={product.image} alt="" />
        </div>
        <div className="display-image">
          <img className="w-[1020px] h-[650px] " src={product.image} alt="" />
        </div>
      </div>
      <div className="flex flex-col my-[0px] mx-[70px] ">
        <h1 className="text-[#5c5c5c] text-[30px] font-[600]  ">
          {product.name}
        </h1>
        <div className="flex items-center mt-[5px] gap-[5px] text-[#1c1c1c] text-[16px] ">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(123)</p>
        </div>
        <div className="flex my-[25px] mx-[0px] text-[24px] font-[700] ">
          <div className="text-[#818181] line-through mr-4">
            ${product.old_price}
          </div>
          <div className="text-red-500">${product.new_price}</div>
        </div>
        <div className="right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          laboriosam odio nisi quisquam.
        </div>
        <div className="right-size">
          <h1 className="mt-[20px] text-[#656565] text-[20px] font-[600] ">
            Select Size
          </h1>
          <div className="flex my-[20px] mx-[0px] gap-[20px] ">
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border rounded-[3px] cursor-pointer ">
              S
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border rounded-[3px] cursor-pointer ">
              M
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border rounded-[3px] cursor-pointer ">
              L
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border rounded-[3px] cursor-pointer ">
              XL
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border rounded-[3px] cursor-pointer ">
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="py-[20px] mt-8 px-[40px] w-[200px] font-[600] text-white bg-red-500 mb-[40px] border-none outline-none cursor-pointer "
        >
          ADD TO CART
        </button>
        <p className="mt-[10px]">
          <span className="font-[600]">
            Category : <span>Women , T-Shirt, Crop Top</span>{" "}
          </span>
        </p>
        <p className="mt-[10px]">
          <span className="font-[600]">
            Tags : <span>Modern, Latest</span>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
