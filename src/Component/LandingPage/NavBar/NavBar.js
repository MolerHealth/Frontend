import React from "react";
import MolarHealthLogo from "../../../Assets/MolarHealthLogo.png";

function NavBar() {
  return (
    <div className="w-full  h-[7.188rem] flex justify-center">
      <nav className="w-[90rem] h-full flex items-center justify-between">
        <div className="flex gap-[1rem] ml-[8rem]">
          <img
            className="w-[40px] h-[22.21px]"
            src={MolarHealthLogo}
            alt="Molar Health Logo"
          />
          <h1 className="font-[700] text-[20px] font-mona">Moler Health</h1>
        </div>

        <ul className="flex gap-[17px] mr-[8rem] items-center font-mona">
          <li className="font-[500] text-[20px] leading-[19.34px]">
            <a href="#home">Home</a>
          </li>
          <li className="font-[500] text-[20px] leading-[19.34px]">
            <a href="#about">Services</a>
          </li>
          <li className="font-[500] text-[20px] leading-[19.34px]">
            <a href="#services">Support</a>
          </li>
          <li className="font-[500] text-[20px] leading-[19.34px]">
            <a href="#contact">Documentation</a>
          </li>
          <li className="font-[700] text-[20px] leading-[19.34px] w-[177px] h-[54px] flex justify-center items-center rounded-[10px] border-[2px] border-[#4169E1] font-mo">
            <a href="#contact">Sign Up</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
