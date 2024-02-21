import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${isActive ? "py-4 shadow-md bg-[#14181c]" : " bg-[#14181c] py-6"} 
    fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-around lg:justify-between h-full">
        <Link to={"/"}>
          <div className="w-[40px] font-semibold text-slate-50">Home</div>
        </Link>
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl text-slate-50" />
          <div
            className="bg-red-500 absolute -right-2 -bottom-2
          text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center"
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
