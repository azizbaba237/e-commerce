import Items from "../Items/Items";
import data_product from "../assets/data";

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] mt-12">
      <h1 className="text-slate-900 text-[50px] font-[600]">POPULAR IN WOMEN</h1>
      <hr className="w-[200px] h-1 rounded-[10px] bg-red-900" />
      <div className="mt-[50px] flex gap-[30px] ">
        {data_product.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}; 

export default Popular;
