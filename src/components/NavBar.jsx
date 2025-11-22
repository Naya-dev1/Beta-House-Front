import React, { useState } from "react";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../context/AuthContext1";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/sign-in");
  };
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
        <div className="relative">
          {!user ? (
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
          ) : (
            <div className="flex items-center gap-2">
             

              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-5xl text-gray-700"
              >
                <CgProfile className=" text-white" />
              </button>

               <span className="text-white font-medium text-[18px]">{user.firstName}</span>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ================== */}
    </div>
  );
};

export default NavBar;
