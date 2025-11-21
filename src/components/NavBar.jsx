import React from "react";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" ">
      <div className=" flex items-center justify-between px-[100px] h-[121px]  ">
        <div>
          <img src={logo} alt="" className=" " />
        </div>
        <div className="flex items-center gap-[33px] text-white">
          <Link className="text-[20px] font-medium">Home</Link>
          <Link className="text-[20px] font-medium ">Properties</Link>
          <Link className="text-[20px] font-medium  ">About Us</Link>
          <Link className="text-[20px] font-medium  ">Blog</Link>
          <Link className="text-[20px] font-medium  ">Contact Us</Link>
        </div>
        <div className="flex gap-[34px] items-center ">
          <Link to="/sign-up ">
            <button className=" w-[140px] h-[61px] rounded-[8px]  border-2 border-[#F5F5F5] text-white cursor-pointer">
              Sign Up
            </button>
          </Link>
          <Link to="/sign-in ">
            <button className=" w-[140px] h-[61px] rounded-[8px] text-white  bg-[#3D9970] cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
