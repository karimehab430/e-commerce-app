import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full md:w-[35vw] xl:max-w-[30vw]
  transition-all duration-300 px-4 lg:px-[35px] z-20`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className=" uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="flex items-center justify-center w-8 h-8 cursor-pointer"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div
        className="flex flex-col overflow-y-auto h-[520px] gap-y-2
      overflow-x-hidden border-b"
      >
        {cart.map((item) => {
          return <CartItem item={item} key={item.id}></CartItem>;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>${total.toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4  w-10 h-10 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="bg-zinc-950 flex p-4 justify-center items-center
        text-[#f4f4f4] w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
