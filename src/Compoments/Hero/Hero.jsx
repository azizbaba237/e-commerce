import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-r from-[#fde1ff] to-[#e1ffea22] flex">
      <div className="flex-col-1 justify-center gap-[20px] pl-[180px] pt-16 leading-[1.1]">
        <h2 className="text-black text-[26px] font-[600]">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="flex items-center gap-5">
            <p className="text-black text-[80px] font-[700]">New</p>
            <img src={hand_icon} alt="" className="w-[105px]" />
          </div>
          <p className="text-black text-[80px] font-[700]">Collection</p>
          <p className="text-black text-[100px] font-[700]">For everyone</p>
        </div>
        <div className="flex justify-center items-center gap-[15px] w-[250px] h-[50px] rounded-[75px] mt-[30px] bg-red-500 text-white text-[22px] font-[500] ">
          <div>Latest collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="flex-1 justify-center items-center">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
