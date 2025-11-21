import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import bath from "../Images/bath.png";
import { FaNairaSign } from "react-icons/fa6";
import { LuArrowRightLeft } from "react-icons/lu";
import { IoShareSocial } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const MainHome = ({ properties }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (type, data) => {
    setModalContent({ type, data });
  };

  const closeModal = () => setModalContent(null);

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";
    const videoIdMatch = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:shorts\/|watch\?v=))([\w-]+)/
    );
    return videoIdMatch
      ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
      : url;
  };

  return (
    <div className="px-[100px] ">
      <div className="mt-[72px] flex justify-between items-center pb-5 ">
        <div className="flex gap-[29.88px] items-center">
          <div>
            <img src="" alt="" />
            <h5>More Filter</h5>
          </div>

          <p>Showing 1 – 10 of 15 results</p>
        </div>

        <div className="flex items-center gap-[13.66px]">
          <p>Sort by:</p>
          <div className="flex items-center gap-[5px]">
            <h5>Default</h5>
            <IoIosArrowDown />
          </div>
        </div>
      </div>

      {/* ============================== */}

      {properties.length === 0 ? (
        <p>No properties found</p>
      ) : (
        <div className="grid grid-cols-3 gap-x-[24px] ga-y-[54px]">
          {properties.map((item) => (
            <div key={item._id} className="">
              <div
                className="bg-[url('/public/house.png')] bg-cover bg-center bg-no-repeat h-[297px] px-[17.23px] pt-[17.23px] rounded-t-[9.19px]"
                style={{
                  backgroundImage: `url(${
                    Array.isArray(item.mainImage)
                      ? item.mainImage[0]
                      : item.mainImage
                  })`,
                }}
              >
                <div className="flex justify-between">
                  <div className="w-[94.49px] bg-[#3D9970] h-[36.19px] rounded-[2.89px]">
                    <p className="text-[13px] font-medium text-[#FFFFFF] py-[7px] text-center">
                      {item.isFeatured ? "Featured" : ""}
                    </p>
                  </div>
                  <div className="w-[94.49px] bg-[#D3D3D3B2] h-[35.61px] rounded-[2.3px]">
                    <p className="text-[13px] font-medium text-[#FFFFFF] py-[7px] text-center">
                      {item.status}
                    </p>
                  </div>
                </div>

                <div className="mt-[172px] flex justify-end gap-[22.97px]">
                  {item.virtualTourLink && (
                    <div
                      className="w-[41.35px] h-[41.35px] bg-[#878787B2] rounded-[9.19px] flex justify-center pt-[11.49px]"
                      onClick={() => openModal("link", item.virtualTourLink)}
                    >
                      <IoIosLink className="text-xl  text-[#FFFFFF] " />
                    </div>
                  )}
                  {item.videoLink && (
                    <div
                      className="w-[41.35px] h-[41.35px] bg-[#878787B2] rounded-[9.19px] flex justify-center pt-[11.49px]"
                      onClick={() => openModal("video", item.videoLink)}
                    >
                      <FaVideo className="text-xl  text-[#FFFFFF] " />
                    </div>
                  )}
                  {item.gallery && item.gallery.length > 0 && (
                    <div
                      className="w-[41.35px] h-[41.35px] bg-[#878787B2] rounded-[9.19px] flex justify-center pt-[11.49px]"
                      onClick={() => openModal("gallery", item.gallery)}
                    >
                      <CiImageOn className="text-xl  text-[#FFFFFF] " />
                    </div>
                  )}
                </div>
              </div>

              <div className="px-[22.98px] space-y-[32px] border border-[#DDD8D8] pt-[21.88px] pb-[31.63px] rounded-b-[9.17px]">
                <div>
                  <div className="space-y-[9px]">
                    <h4 className="text-[#666666] font-semibold text-[20.98px]">
                      {" "}
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 ">
                      <MdLocationPin className="text-[#666666] " />
                      <p className="text-[#666666] text-[15px]">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/*  */}

                  <div className="flex gap-[28px] items-center mt-[23px]">
                    <div className="flex gap-[9px] items-center">
                      <IoBedOutline className="text-[#696969] text-2xl" />
                      <p className="text-[16px] text-[#666666] font-normal">
                        {item.bedrooms} Bedrooms
                      </p>
                    </div>

                    <div className="flex gap-[9px] items-center">
                      <img src={bath} alt="" />
                      <p className="text-[16px] text-[#666666] font-normal">
                        {item.bathrooms} Bathrooms
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-t border-[#E8E8E8] pt-[36.8px]">
                  <div className="flex items-center gap-1  ">
                    <FaNairaSign />
                    <p className="text-[22px] font-semibold text-[#373737]">
                      {item.price}
                    </p>
                  </div>

                  <div className="flex gap-[25.84px] items-center pt-[3.45px] pr-[5.74px]">
                    <LuArrowRightLeft className="text-xl text-[#484848]" />
                    <IoShareSocial className="text-xl text-[#484848]" />
                    <AiOutlineHeart className="text-xl text-[#484848]" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 1 */}
        </div>
      )}

      <div className="flex justify-center mt-[63px] gap-[15px] items-center">
        <FaChevronLeft className="text-[#60697A75]  text-xl rounded-[3px]" />
        <p className="px-[10px] py-[2px] text-[#FFFFFF] text-[22.37px] bg-[#3D9970] rounded-[3px]">
          1
        </p>
        <p className="px-[10px] py-[2px]  text-[22.37px] rounded-[3px]">2</p>
        <p className="px-[10px] py-[2px]  text-[22.37px] rounded-[3px]">3</p>
        <p className="px-[10px] py-[2px]  text-[22.37px] rounded-[3px]">4</p>
        <FaChevronRight className="text-[#60697A75]  text-xl rounded-[3px]" />
      </div>

      {/* DISCOVER */}

      <div className="pt-[129.44px] relative flex flex-col gap-[72px]">
        <h2 className="font-semibold text-[#0F1A1E] text-[50px] text-center">
          Discover Our Popular Properties
        </h2>
        <div className="bg-[#F4F4F4] w-[54px] h-[54px] flex items-center justify-center rounded-[27px] absolute bottom-[180px] left-[-28px] z-50 ">
          <FaLongArrowAltLeft className="text-2xl" />
        </div>
        <div className=" gap-[23px] grid grid-cols-4 relative ">
          <div className="bg-[url('/public/house.png')] bg-cover bg-center bg-no-repeat h-[412px]  relative rounded-t-[7px]  rounded-b-[4.5px]">
            <div className="top-[270px] absolute pl-[17px] pt-2 text-white flex flex-col gap-[5px]  bg-[#4A4A4C33]   backdrop-blur-[4px] w-full h-[142px]">
              <div>
                <div>
                  <h5 className="text-[18px] font-semibold">
                    Semi Detached Duplex
                  </h5>
                  <div className="flex gap-[3px] items-center">
                    <FaNairaSign />
                    <p className="text-[18px] font-semibold ">3,340,000,000</p>
                  </div>
                </div>

                <div className="flex gap-[14px] items-center ">
                  <p className="text-[14px] font-normal">6 Bed </p>
                  <p className="text-[14px] font-normal"> 3 Bath </p>
                  <p className="text-[14px] font-normal"> 720 sq ft </p>
                </div>
              </div>

              <div className="flex gap-[11px] items-center ">
                <MdLocationPin className="text-[#ffffff] text-l " />
                <p className="text-[14px] font-normal">
                  Victoria Island, Lagos
                </p>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="bg-[url('/public/house.png')] bg-cover bg-center bg-no-repeat h-[412px]  relative rounded-t-[7px]  rounded-b-[4.5px]">
            <div className="top-[270px] absolute pl-[17px] pt-2 text-white flex flex-col gap-[5px]  bg-[#4A4A4C33]   backdrop-blur-[4px] w-full h-[142px]">
              <div>
                <div>
                  <h5 className="text-[18px] font-semibold">
                    Semi Detached Duplex
                  </h5>
                  <div className="flex gap-[3px] items-center">
                    <FaNairaSign />
                    <p className="text-[18px] font-semibold ">3,340,000,000</p>
                  </div>
                </div>

                <div className="flex gap-[14px] items-center ">
                  <p className="text-[14px] font-normal">6 Bed </p>
                  <p className="text-[14px] font-normal"> 3 Bath </p>
                  <p className="text-[14px] font-normal"> 720 sq ft </p>
                </div>
              </div>

              <div className="flex gap-[11px] items-center ">
                <MdLocationPin className="text-[#ffffff] text-l " />
                <p className="text-[14px] font-normal">
                  Victoria Island, Lagos
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[url('/public/house.png')] bg-cover bg-center bg-no-repeat h-[412px]  relative rounded-t-[7px]  rounded-b-[4.5px]">
            <div className="top-[270px] absolute pl-[17px] pt-2 text-white flex flex-col gap-[5px]  bg-[#4A4A4C33]   backdrop-blur-[4px] w-full h-[142px]">
              <div>
                <div>
                  <h5 className="text-[18px] font-semibold">
                    Semi Detached Duplex
                  </h5>
                  <div className="flex gap-[3px] items-center">
                    <FaNairaSign />
                    <p className="text-[18px] font-semibold ">3,340,000,000</p>
                  </div>
                </div>

                <div className="flex gap-[14px] items-center ">
                  <p className="text-[14px] font-normal">6 Bed </p>
                  <p className="text-[14px] font-normal"> 3 Bath </p>
                  <p className="text-[14px] font-normal"> 720 sq ft </p>
                </div>
              </div>

              <div className="flex gap-[11px] items-center ">
                <MdLocationPin className="text-[#ffffff] text-l " />
                <p className="text-[14px] font-normal">
                  Victoria Island, Lagos
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[url('/public/house.png')] bg-cover bg-center bg-no-repeat h-[412px]  relative rounded-t-[7px]  rounded-b-[4.5px]">
            <div className="top-[270px] absolute pl-[17px] pt-2 text-white flex flex-col gap-[5px]  bg-[#4A4A4C33]   backdrop-blur-[4px] w-full h-[142px]">
              <div>
                <div>
                  <h5 className="text-[18px] font-semibold">
                    Semi Detached Duplex
                  </h5>
                  <div className="flex gap-[3px] items-center">
                    <FaNairaSign />
                    <p className="text-[18px] font-semibold ">3,340,000,000</p>
                  </div>
                </div>

                <div className="flex gap-[14px] items-center ">
                  <p className="text-[14px] font-normal">6 Bed </p>
                  <p className="text-[14px] font-normal"> 3 Bath </p>
                  <p className="text-[14px] font-normal"> 720 sq ft </p>
                </div>
              </div>

              <div className="flex gap-[11px] items-center ">
                <MdLocationPin className="text-[#ffffff] text-l " />
                <p className="text-[14px] font-normal">
                  Victoria Island, Lagos
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#3D9970] w-[54px] h-[54px] flex items-center justify-center rounded-[27px]  absolute bottom-[170px] right-[-28px] z-50 ">
          <FaLongArrowAltRight className="text-2xl" />
        </div>
      </div>

      {/* ================= Modal ================= */}
      {modalContent && (
        <div
          className="fixed inset-0  backdrop-blur-sm bg-[#2D2E2ECC]  flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-[800px] max-w-full max-h-[90%] overflow-auto relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close Button */}
            <div className="flex justify-end items-end mb-4">
              <button className=" font-bold " onClick={closeModal}>
                <IoMdClose className="text-2xl" />
              </button>
            </div>

            {/* Gallery */}
            {modalContent.type === "gallery" && (
              <div className="grid grid-cols-2 gap-2">
                {modalContent.data.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Gallery ${idx}`}
                    className="w-full h-[400px] object-cover rounded"
                  />
                ))}
              </div>
            )}

            {/* Video */}
            {modalContent.type === "video" && (
              <div className="w-full h-[400px]">
                <iframe
                  width="100%"
                  height="100%"
                  src={getYouTubeEmbedUrl(modalContent.data)}
                  title="Property Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {/* Link */}
            {modalContent.type === "link" && (
              <iframe
                src={modalContent.data}
                className="w-full h-[400px]"
                title="Property Link"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainHome;
