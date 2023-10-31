import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/Context";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="flex justify-around p-[16px] shadow">
      <div className="flex items-center gap-[10px]">
        <img src={logo} alt="" />
        <p className="text-black text-[38px] font-[600]">SHOPPER</p>
      </div>
      <ul className="flex items-center list-none gap-[50px] text-[20px] font-[500]">
        <li
          onClick={() => {
            setMenu("shop");
          }}
          className=" items-center justify-center gap-[3px] cursor-pointer flex-col "
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? (
            <hr className="border-none w-[100%] h-[3px] rounded-lg bg-red-500" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
          className=" items-center justify-center gap-[3px] cursor-pointer flex-col "
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>{" "}
          {menu === "mens" ? (
            <hr className="border-none w-[100%] h-[3px] rounded-lg bg-red-500" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
          className=" items-center justify-center gap-[3px] cursor-pointer flex-col "
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>{" "}
          {menu === "womens" ? (
            <hr className="border-none w-[100%] h-[3px] rounded-lg bg-red-500" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
          className=" items-center justify-center gap-[3px] cursor-pointer flex-col "
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kid
          </Link>{" "}
          {menu === "kids" ? (
            <hr className="border-none w-[100%] h-[3px] rounded-lg bg-red-500" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="flex items-center gap-[45px]">
        <Link to="/login">
          <button className="w-[150px] h-[50px] outline-none border-2 rounded-full border-gray-400 text-xl font-normal bg-white cursor-pointer hover:bg-slate-300">
            Login
          </button>
        </Link>
        <Link to="cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-[11px] text-sm bg-red-600 text-white">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
