import React from "react";
import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div className="w-[250px] hover:scale-[1.05] transition-[0,6s]">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
      </Link>

      <p className="my-[6px]">{props.name}</p>
      <div className="flex gap-5">
        <div className="text-gray-600 text-[18px] font[500]">
          ${props.old_price}
        </div>
        <div className="text-gray-600 text-[18px] font[500] line-through">
          ${props.new_price}
        </div>
      </div>
    </div>
  );
};

export default Items;
