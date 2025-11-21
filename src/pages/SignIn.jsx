import React, { useState } from "react";
import logo from "../Images/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext1";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      navigate("/"); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex md:flex-row md:items-center flex-col ">
      <div className="lg:ml-[101px] lg:mr-[82px] px-6  md:mx-20 space-y-[33px] lg:w-[482px] w-full my-6 md:mt-0 ">
        <div className="lg:hidden flex justify-center mt-4 md:mt-12">
          <Link to="/">
            <div className="flex justify-center items-center w-[54px] h-[54px] bg-[#3D9970] rounded-full">
              <p className="font-bold text-[23.61px] text-white">BH</p>
            </div>
          </Link>
        </div>

        <div className="  flex flex-col gap-2.5 text-center lg:text-start">
          <h3 className="lg:text-[27.5px] text-[22px] text-[#181A20] font-semibold leading-[28px] ">
            Welcome Back to BetaHouse!
          </h3>
          <p className="text-[#181A20D1] md:text-[16px] text-[14px] font-normal">
            Lets get started by filling out the information below
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          action=""
          className=" flex flex-col lg:gap-5 md:gap-10 gap-5 "
        >
          <div className="flex flex-col gap-[5px] ">
            <label
              htmlFor=""
              className="text-[16px] font-medium text-[#181A20D1]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="py-[15px] pl-[12px] border-2 border-[#DEDFE0] rounded-[5px] w-full md:placeholder:text-[16px] placeholder:text-[14px]"
            />
          </div>

          <div className="flex flex-col gap-[5px] ">
            <label
              htmlFor=""
              className="text-[16px] font-medium text-[#181A20D1]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="py-[15px] pl-[12px] border-2 border-[#DEDFE0] rounded-[5px] w-full md:placeholder:text-[16px] placeholder:text-[14px]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[13px] ">
              <input
                type="checkbox"
                className=" accent-[#3D9970] md:w-[21px] w-[19.6px] h-[19.6px]"
              />
              <p className="md:text-[16px] text-[14px] font-medium text-[#716F6F]">
                Remember Me
              </p>
            </div>
            <Link className="text-[#EC5E5E] md:text-[16px] text-[14px] font-normal ">
              Forgot Password
            </Link>
          </div>

          <div className=" w-full py-[10px] rounded-[15px] bg-[#3D9970] text-center">
            <button
              type="submit"
              className="  md:text-[22px] text-[18px] text-[#FFFFFF] "
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="flex flex-col lg:gap-[33px] md:gap-10 gap-[33px]">
          <div className="lg:space-y-2.5 md:space-y-9 space-y-3">
            <div className="flex gap-2.5 items-center justify-center">
              <div className="w-[177px] h-[1px] bg-gradient-to-r from-[#4F4E4E00] to-[#4F4E4E]"></div>
              <p className="text-[16px] font-semibold text-[#4F4E4E]">or</p>
              <div className=" w-[177px] h-[1px]  bg-gradient-to-r from-[#4F4E4E00] to-[#4F4E4E]"></div>
            </div>

            <div className="flex items-center justify-center gap-2.5 rounded-[15px] border border-[#000000] w-full py-[10px] ">
              <FcGoogle className="text-2xl" />
              <p className="  md:text-[22px] text-[18px] text-[#292929] ">
                Continue with Google
              </p>
            </div>
          </div>

          <div>
            <Link
              to="/sign-up "
              className="text-[#716F6F] md:text-[18px]  text-[16px] font-normal flex justify-center gap-2"
            >
              New User?
              <span className="text-[#3D9970]">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block register w-[779px] h-[900px] pl-[58px] pt-[53px] ">
        <Link to="/">
          <img src={logo} alt="" className="mb-[21px]" />
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
