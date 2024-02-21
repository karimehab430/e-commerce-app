import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  const { addToCart } = useContext(CartContext);

  return (
    <Link>
      <div className="group border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[200px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
          <div className="bg-red-500 absolute top-6 -right-14 group-hover:right-5  hover:opacity-100 transition-all duration-300 ">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center text-slate-100 w-12 h-12">
                <BsPlus className=" font-semibold text-3xl" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="text-left">
        <div className="text-sm text-gray-500 mb-1 capitalize">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">${price}</div>
      </div>
    </Link>
  );
};

export default Product;
