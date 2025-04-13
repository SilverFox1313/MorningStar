import React from "react";
import coins from "../assets/images/coins.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center gap-2 py-1">
        <span id="inicio" className="orange animate-pulse">90%</span>
        <span className="lightgray animate-pulse">DE DESCUENTO</span>
        <span className="animate-bounce">🔥</span>
      </div>
      <nav className="lightblack px-8">
        <div className="flex sm:justify-between justify-center items-center py-2">
          <div className="flex items-center gap-2">
          <img
            src={coins}
            alt="logo"
            className="size-8"
          />
          <span className="text-xl font-bold">MorningStar</span>
          </div>
          <ul className="flex gap-10 hidden md:flex">
            <li><a href="#inicio" className="hover:text-orange-600">INICIO</a></li>
            <li><a href="#curso" className="hover:text-orange-600">CURSO</a></li>
            <li><a href="#contacto" className="hover:text-orange-600">CONTACTO</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
