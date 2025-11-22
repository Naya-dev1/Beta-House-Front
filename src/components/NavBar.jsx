import React, { useState } from "react";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../context/AuthContext1";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/sign-in");
  };
  return (
    <div className=" ">
      <div className=" flex items-center justify-between lg:px-[100px] px-6 sm:px-[50px] h-[121px]  ">
        <div>
          <img src={logo} alt="" className=" md:w-[215.66px] w-[160px]" />
        </div>
        <div className="hidden lg:flex items-center gap-[33px] text-white">
          <Link className="text-[20px] font-medium hover:text-[#3D9970]">
            Home
          </Link>
          <Link className="text-[20px] font-medium hover:text-[#3D9970]">
            Properties
          </Link>
          <Link className="text-[20px] font-medium hover:text-[#3D9970] ">
            About Us
          </Link>
          <Link className="text-[20px] font-medium  hover:text-[#3D9970]">
            Blog
          </Link>
          <Link className="text-[20px] font-medium  hover:text-[#3D9970]">
            Contact Us
          </Link>
        </div>

        <div className="hidden lg:block relative">
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

              <span className="text-white font-medium text-[18px]">
                {user.firstName}
              </span>

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

        {/* ====MOBILE ============== */}

        <button
          className="lg:hidden text-3xl text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* ================== */}

      {mobileOpen && (
        <div className="lg:hidden bg-[#0F1A1E] text-white  sm:px-[50px] px-6 pb-6 space-y-5 pt-6">
          <Link className="block text-[18px]">Home</Link>
          <Link className="block text-[18px]">Properties</Link>
          <Link className="block text-[18px]">About Us</Link>
          <Link className="block text-[18px]">Blog</Link>
          <Link className="block text-[18px]">Contact Us</Link>

          {!user ? (
            <div className="flex flex-col gap-5">
              <Link to="/sign-up">
                <button className="w-full py-3 border rounded-lg">
                  Sign Up
                </button>
              </Link>
              <Link to="/sign-in">
                <button className="w-full py-3 bg-[#3D9970] rounded-lg">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CgProfile className="text-4xl" />
                <span className="text-white font-medium">{user.firstName}</span>
              </div>

              <button
                onClick={handleLogout}
                className="w-full py-3 border rounded-lg hover:bg-gray-800"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
