import React, { useContext } from "react";
import { ShopContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import BreackCrums from "../Compoments/BreackCrums/BreackCrums";
import ProductDisplay from "../Compoments/ProductDisplay/ProductDisplay";
import Description from "../Compoments/Description/Description";
import RelateProduc from "../Compoments/RelateProduct/RelateProduc";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreackCrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelateProduc />
    </div>
  );
};

export default Product;
