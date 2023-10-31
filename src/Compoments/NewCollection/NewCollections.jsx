import Items from "../Items/Items";
import new_collection from "../assets/new_collections";
const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] mb-[100px] ">
      <h1 className="text-slate-900 text-[50px] font-[600]">NEW COLLECTIONS</h1>
      <hr className="w-[200px] h-1 rounded-[10px] bg-red-900" />
      <div className="grid grid-cols-4 pt-[30px] gap-[30px]">
        {new_collection.map((item, i) => {
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

export default NewCollections;
