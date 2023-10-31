import exclusive_image from "../assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="w-[65%] h-[60vh] flex m-auto mb-[150px] mt-[150px] px-[100px] bg-gradient-to-r from-[#fde1ff] to-[#e1ffea22]">
      <div className="flex flex-1 flex-col justify-center leading-[1.1]">
        <h1 className="text-[50px] font-[600]">Exclusive</h1>
        <h1 className="text-black text-[50px] font-[600]">Offers For You</h1>
        <p className="text-black text-[20px] font-[500] mt-2">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-[282px] h-[40px] rounded-[35px] bg-red-500 border-none text-white text-[22px] font-[30px] mt-[25px] cursor-pointer ">
          Check Now
        </button>
      </div>
      <div className="flex justify-end   ">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
