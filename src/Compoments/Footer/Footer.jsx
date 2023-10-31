import footer_logo from "../assets/logo_big.png";
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[50px]">
      <div className="flex items-center gap-[20px]">
        <img src={footer_logo} alt="" />
        <p className="text-black text-[46px] font-[700] ">SHOPPER</p>
      </div>
      <ul className="flex list-none gap-[50px] text-[20px] ">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-[20px]">
        <div className="p-[10px] pb-[6px] bg-slate-100 border-2 ">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="p-[10px] pb-[6px] bg-slate-100 border-2 ">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="p-[10px] pb-[6px] bg-slate-100 border-2 ">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-gray-800 text-[20px] ">
        <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-slate-200 " />
        <p>Copyrigth @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
