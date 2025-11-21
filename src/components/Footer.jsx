import React from "react";
import logo from "../Images/Logo.png";
import { MdLocationPin } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-[#035A33] text-[#ffffff] pt-[86.33px] mt-[80.67px]">
      <div className=" px-[100px] flex justify-between items-start ">
        <div className="w-[379px]">
          <img src={logo} alt="" className="mb-[21px]" />
          <p className="text-[16px] font-normal leading-[160%] gap-[21.25px]">
            Discover, rent, and find your ideal home hassle-free with BetaHouse.
            Take control of your rental journey today!
          </p>

          <div className="flex flex-col gap-[15px] mt-[27px]">
            <div className="flex items-center gap-5">
              <MdLocationPin className="text-[#ffffff] " />
              <p className="text-[15px] font-normal">
                95 Tinubu Estate, Lekki, Lagos
              </p>
            </div>

            <div className="flex items-center gap-5">
              <IoIosCall />
              <p className="text-[15px] font-normal">+234 675 8935 675</p>
            </div>

            <div className="flex items-center gap-5">
              <CiMail />
              <p className="text-[15px] font-normal">
                support@rentbetahouse.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between  w-[682px]">
          <div className="flex flex-col gap-4 ">
            <h5 className="text-[23px] font-semibold">Quick Links</h5>
            <Link className="text-[18px] font-normal">Home</Link>
            <Link className="text-[18px] font-normal">Properties</Link>
            <Link className="text-[18px] font-normal">About</Link>
            <Link className="text-[18px] font-normal">Contact us</Link>
            <Link className="text-[18px] font-normal">Blog</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-[23px] font-semibold">More </h5>
            <Link className="text-[18px] font-normal">Agents</Link>
            <Link className="text-[18px] font-normal">Affordable Houses</Link>
            <Link className="text-[18px] font-normal"> FAQ’s</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-[23px] font-semibold">Popular Search</h5>
            <Link className="text-[18px] font-normal">Apartment for sale</Link>
            <Link className="text-[18px] font-normal">Apartment for rent</Link>
            <Link className="text-[18px] font-normal">3 bedroom flat</Link>
            <Link className="text-[18px] font-normal">Bungalow</Link>
          </div>
        </div>
      </div>

      <div className="mt-[86.67px] border-t border-[#6F6F6F] px-[172px] flex justify-between items-center pt-[36px] pb-[56px]">
        <p className="text-[14px] font-normal">
          Copyright 2023 Betahouse | Designed by Michael.fig
        </p>
        <p className="text-[15px] font-normal">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
