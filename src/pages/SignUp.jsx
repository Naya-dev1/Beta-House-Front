import React, { useState } from "react";
import logo from "../Images/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext1";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data before submission:", formData);

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      console.log("Passwords do not match");
      return;
    }

    try {
      const user = await signup(formData);
      if (user) {
        toast.success("Signup successful!");
        console.log("Signup successful, user received:", user);
        navigate("/sign-in");
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      console.log("Signup failed with error:", error);
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex ">
      <div className="lg:ml-[97px] md:mt-[84px] lg:mr-[82px] space-y-[33px] lg:w-[482px] my-6  px-6">
        <div className="lg:hidden flex justify-center mt-4 md:mt-12">
          <Link to="/">
            <div className="flex justify-center items-center w-[54px] h-[54px] bg-[#3D9970] rounded-full">
              <p className="font-bold text-[23.61px] text-white">BH</p>
            </div>
          </Link>
        </div>
        <div className="md:mr-[27px]  flex flex-col gap-2.5">
          <h3 className="md:text-[25.5px] text-[#181A20] font-semibold md:leading-[28px] ">
            Join our community of home seekers and explore the possibilities
            that await.
          </h3>
          <p className="text-[#181A20D1] md:text-[16px] text-[14px] font-normal">
            Lets get started by filling out the information below
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          action=""
          className=" flex flex-col gap-5"
        >
          <div className="flex md:flex-row flex-col md:items-center lg:gap-[44px] ">
            <div className="flex flex-col gap-[5px] ">
              <label
                className="text-[16px] font-medium text-[#181A20D1]"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter Name"
                value={formData.firstName}
                onChange={handleChange}
                className="py-[15px] px-[12px] border-2 border-[#DEDFE0] rounded-[5px] lg:w-[218px] w-full  md:placeholder:text-[16px] placeholder:text-[14px]"
              />
            </div>

            <div className="flex flex-col gap-[5px] ">
              <label
                
                className="text-[16px] font-medium text-[#181A20D1]"
              >
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Name"
                value={formData.lastName}
                onChange={handleChange}
                className="py-[15px] px-[12px] border-2 border-[#DEDFE0] rounded-[5px] lg:w-[218px]  md:placeholder:text-[16px] placeholder:text-[14px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[5px] ">
            <label
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
              className="py-[15px] pl-[12px] border-2 border-[#DEDFE0] rounded-[5px] w-full "
            />
          </div>

          <div className="flex flex-col gap-[5px] ">
            <label
              className="text-[16px] font-medium text-[#181A20D1]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="py-[15px] pl-[12px] border-2 border-[#DEDFE0] rounded-[5px] w-full"
            />
          </div>

          <div className="flex flex-col gap-[5px] ">
            <label
              className="text-[16px] font-medium text-[#181A20D1]"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="py-[15px] pl-[12px] border-2 border-[#DEDFE0] rounded-[5px] w-full"
            />
          </div>

          <div className="flex items-center gap-[13px] ">
            <input
              required
              type="checkbox"
              className=" accent-[#3D9970] w-[21px] h-[19.6px]"
            />
            <p className="text-[16px] font-medium text-[#716F6F]">
              I agree to{" "}
              <span className="text-[#3D9970]">Terms of Service</span> and{" "}
              <span className="text-[#3D9970]">Privacy Policies</span>
            </p>
          </div>

          <div className=" w-full py-[10px] rounded-[15px] bg-[#3D9970] text-center">
            <button type="submit" className="  text-[22px] text-[#FFFFFF] ">
              Sign up
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-[33px]">
          <div className="space-y-2.5">
            <div className="flex gap-2.5 items-center justify-center">
              <div className="w-[177px] h-[1px] bg-gradient-to-r from-[#4F4E4E00] to-[#4F4E4E]"></div>
              <p className="text-[16px] font-semibold text-[#4F4E4E]">or</p>
              <div className=" w-[177px] h-[1px]  bg-gradient-to-r from-[#4F4E4E00] to-[#4F4E4E]"></div>
            </div>

            <div className="flex items-center justify-center gap-2.5 rounded-[15px] border border-[#000000] w-full py-[10px] ">
              <FcGoogle className="text-2xl" />
              <p className="  text-[22px] text-[#292929] ">
                Continue with Google
              </p>
            </div>
          </div>

          <div>
            <Link
              to="/sign-in "
              className="text-[#716F6F] text-[18px] font-normal flex justify-center gap-2"
            >
              Already have an account?
              <span className="text-[#3D9970]">Sign in</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block register w-[779px] h-[1028px] pl-[58px] pt-[53px] ">
        <Link to="/">
          <img src={logo} alt="" className="mb-[21px]" />
        </Link>{" "}
      </div>
    </div>
  );
};

export default SignUp;
