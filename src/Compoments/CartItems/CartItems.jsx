import React, { useContext } from "react";
import { ShopContext } from "../../Context/Context";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="my-[100px] mx-[170px] ">
      <div className="grid grid-cols-6 items-center gap-[20px] py-[20px] px-[0px] text-[#454545] text-[18px] font-[800]">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className=" " />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="grid grid-cols-6 items-center gap-[20px] py-[20px] px-[0px] text-[#454545] text-[17px] font-[500]  ">
                <img src={e.image} alt="" className="w-[62px]" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="w-[64px] h-[50px] border-2 border-[#ebebeb] bg-white ">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="w-[15px] my-[0px] mx-[40px] "
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr className="h-[3px] bg-[#e2e2e2] " />
            </div>
          );
        }
        return null;
      })}
      <div className="flex my-[100px] mx-[0px] ">
        <div className="flex flex-1 flex-col mr-[200px] gap-[40px]">
          <h1>CartTotal</h1>
          <div>
            <div className="flex justify-between py-[15px] px-[0px] ">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-[15px] px-[0px] ">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-[15px] px-[0px] ">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button className="w-[262px] h-[58px] outline-none border-none bg-red-500 text-white text-[16px] font-[600] cursor-pointer ">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className=" flex-1 text-[16px] font-[500] ">
          <p>If you have a promo code introduct here </p>
          <div className="w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea] ">
            <input
              className="border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px]  "
              type="text"
              placeholder="promo code "
            />
            <button className="w-[150px] h-[58px] text-[16px] bg-black text-white cursor-pointer ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
