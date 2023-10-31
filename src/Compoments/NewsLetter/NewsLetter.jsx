import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto px-[140px] mb-[90px] gap[30px]  bg-gradient-to-r from-[#fde1ff] to-[#e1ffea22] ">
      <h1 className="text-black text-[34px] font-[600] ">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="flex items-center justify-between">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-[750px] h-[70px] rounded-[80px] border-1 border-white ">
        <input
          type="email"
          placeholder="Your Email id"
          className="w-[500px] ml-[30px] border-none outline-none texte-black font-sans font-[16px] "
        />
        <button className="w-[210px] h-[70px] rounded-[80px] bg-slate-700 text-white text-[16px] cursor-pointer ">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
