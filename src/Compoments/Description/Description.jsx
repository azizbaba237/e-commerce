import React from "react";

const Description = () => {
  return (
    <div className="description">
      <div className="flex  mx-[170px]">
        <div className="flex items-center justify-center text-[16px] font-[600] w-[150px] h-[50px] border border-[#d0d0d0] ">
          Description
        </div>
        <div className="bg-[#FBFBFB] text-[#555] flex items-center justify-center text-[16px] font-[600] w-[150px] h-[50px] border border-[#d0d0d0] ">
          Reviews
        </div>
      </div>
      <div className=" mx-[170px] flex flex-col gap-[25px] border p-[48px]   ">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Perspiciatis, reprehenderit reiciendis quam iure voluptatum atque
          explicabo nulla placeat, temporibus cupiditate libero voluptatem
          asperiores nobis voluptate exercitationem praesentium? Amet, enim.
          Aut!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          eveniet dolorem ea delectus quaerat numquam blanditiis culpa ab
          dolorum, doloremque possimus voluptates, rem unde debitis dolores eius
          odit perspiciatis voluptate!
        </p>
      </div>
    </div>
  );
};

export default Description;
