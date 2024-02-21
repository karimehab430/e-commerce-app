import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  const { image, description, title, price } = product;

  return (
    <div className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img src={image} alt="" className="max-w-[200px] lg:max-w-sm"></img>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl font-medium mb-6">${price}</div>
            <p className="mb-6 mx-4 lg:mx-0">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-zinc-950 py-4 px-8 text-[#f4f4f4] text-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
