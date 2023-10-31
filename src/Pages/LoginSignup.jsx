import React from "react";

const LoginSignup = () => {
  return (
    <div className="w-[100%] h-[130vh] bg-slate-200 pt-[50px] ">
      <div className="w-[450px] h-[600px] bg-white m-auto py-[40px] px-[60px] ">
        <h1 className="my-[20px] flex justify-center font-bold text-lg ">Sign Up</h1>
        <div className="flex flex-col gap-[29px] mt-[30px] ">
          <input
            className="h-[50px] w-[100%] pl-[20px] border outline-none text-[#5c5c5C] font-[18px] "
            type="text"
            placeholder="Name"
          />
          <input
            className="h-[50px] w-[100%] pl-[20px] border outline-none text-[#5c5c5C] font-[18px] "
            type="email"
            placeholder="Email "
          />
          <input
            className="h-[50px] w-[100%] pl-[20px] border outline-none text-[#5c5c5C] font-[18px] "
            type="password"
            placeholder="Password "
          />
        </div>
        <button className="w-[100%] h-[50px] text-white bg-red-500 mt-[30px] border-none text-[20px] font-[400] cursor-pointer ">
          Continue
        </button>
        <p className="mt-[20px] text-[#5c5c5c] text-[15px] font-[500] ">
          Already have an account ?{" "}
          <span className="text-blue-500 font-[600] cursor-pointer">
            Login here
          </span>
        </p>
        <div className="flex items-center mt-[25px] gap-[25px] text-[15px] font-[400] ">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
