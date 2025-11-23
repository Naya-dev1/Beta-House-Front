import React from "react";
import logo from "../Images/Logo.png";
import { MdLocationPin } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-[#035A33] text-[#ffffff] pt-[86.33px] mt-[80.67px]">
      <div className=" lg:px-[100px] sm:px-[50px] px-4 flex  lg:flex-row flex-col justify-between items-start ">
        <div className="lg:w-[379px]">
          <img src={logo} alt="" className="mb-[21px]" />
          <p className="lg:text-[16px] sm:text-[18px] text-[14px] font-normal leading-[160%] gap-[21.25px]">
            Discover, rent, and find your ideal home hassle-free with BetaHouse.
            Take control of your rental journey today!
          </p>

          <div className="flex flex-col gap-[15px] lg:mt-[27px] mt-[35px]">
            <div className="flex items-center gap-5">
              <MdLocationPin className="text-[#ffffff] " />
              <p className="text-[15px] sm:text-[20px] font-normal">
                95 Tinubu Estate, Lekki, Lagos
              </p>
            </div>

            <div className="flex items-center gap-5">
              <IoIosCall />
              <p className="text-[15px] sm:text-[20px] font-normal">+234 675 8935 675</p>
            </div>

            <div className="flex items-center gap-5">
              <CiMail />
              <p className="text-[15px] sm:text-[20px] font-normal">
                support@rentbetahouse.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col mt-10 lg:mt-0 lg:justify-between sm:gap-4 gap-7 w-[682px]">
          <div className="flex flex-col gap-4  ">
            <h5 className="lg:text-[23px] sm:text-[26px] text-[20px] font-semibold">
              Quick Links
            </h5>
            <Link className="lg:text-[18px] sm:text-[20px] text-[16px] font-normal">Home</Link>
            <Link className="lg:text-[18px] sm:text-[20px] text-[16px] font-normal">
              Properties
            </Link>
            <Link className="lg:text-[18px] sm:text-[20px] text-[16px] font-normal">
              About
            </Link>
            <Link className="lg:text-[18px] sm:text-[20px] text-[16px] font-normal">
              Contact us
            </Link>
            <Link className="lg:text-[18px]  sm:text-[20px] text-[16px] font-normal">Blog</Link>
          </div>

          <div className="flex flex-col gap-4 ">
            <h5 className="lg:text-[23px] sm:text-[26px] text-[20px] font-semibold">More </h5>
            <Link className="lg:text-[18px] sm:text-[20px] text-[16px] font-normal">
              Agents
            </Link>
            <Link className="lg:text-[18px] sm:text-[20px] text-[16px] font-normal">
              Affordable Houses
            </Link>
            <Link className="lg:text-[18px] sm:text-[20px] text-[16px] font-normal">
              {" "}
              FAQ’s
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="lg:text-[23px] sm:text-[26px] text-[20px] font-semibold">
              Popular Search
            </h5>
            <Link className="lg:text-[18px] sm:text-[20px] text-[16px] font-normal">
              Apartment for sale
            </Link>
            <Link className="lg:text-[18px] sm:text-[20px] text-[16px] font-normal">
              Apartment for rent
            </Link>
            <Link className="lg:text-[18px] sm:text-[20px] text-[16px] font-normal">
              3 bedroom flat
            </Link>
            <Link className="lg:text-[18px] sm:text-[20px] text-[16px] font-normal">
              Bungalow
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-[86.67px] border-t border-[#6F6F6F] lg:px-[172px] sm:px-[120px] px-4 flex lg:flex-row flex-col lg:justify-between items-center pt-[36px] gap-4 pb-[56px]">
        <p className="lg:text-[14px] sm:text-[18px] text-[13px] font-normal">
          Copyright 2023 Betahouse | Designed by Michael.fig
        </p>
        <p className="lg:text-[15px] sm:text-[18px] text-[13px] font-normal">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
