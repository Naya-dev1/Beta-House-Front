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
import { FaHeart } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useAuth } from "../context/AuthContext1";
import { FaSliders } from "react-icons/fa6";

const MainHome = ({
  properties,
  currentPage,
  totalPages,
  onPageChange,
  loading,
}) => {
  if (loading) return <p className="text-center mt-16">Loading...</p>;

  const { user, toggleFavourite } = useAuth();

  const [updatingFavs, setUpdatingFavs] = useState([]);

  const [modalContent, setModalContent] = useState(null);

  const handleFavouriteClick = async (propertyId) => {
    if (updatingFavs.includes(propertyId)) return;
    setUpdatingFavs((prev) => [...prev, propertyId]);

    try {
      await toggleFavourite(propertyId);
    } finally {
      setUpdatingFavs((prev) => prev.filter((id) => id !== propertyId));
    }
  };

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

  const scrollLeft = () => {
    const slider = document.getElementById("popularScroll");
    slider.scrollLeft -= 300;
  };

  const scrollRight = () => {
    const slider = document.getElementById("popularScroll");
    slider.scrollLeft += 300;
  };

  return (
    <div className="lg:px-[100px] sm:px-[50px] px-4">
      <div className="mt-[72px] flex justify-between items-center pb-5 ">
        <div className="flex md:flex-row flex-col gap-2  md:gap-[29.88px] md:items-center">
          <div className="flex gap-1 items-center">
            <FaSliders className="text-xs" />{" "}
            <h5 className="md:text-[16px] text-[12px]">More Filter</h5>
          </div>

          <p className="md:text-[16px] text-[12px]">
            Showing 1 – 6 of 17 results
          </p>
        </div>

        <div className="flex items-center md:gap-[13.66px] gap-1">
          <p className="md:text-[16px] text-[12px]">Sort by:</p>
          <div className="flex items-center gap-[5px]">
            <h5 className="md:text-[16px] text-[11px]">Default</h5>
            <IoIosArrowDown />
          </div>
        </div>
      </div>

      {/* ============================== */}

      {properties.length === 0 ? (
        <p className="text-center mt-16">No properties found</p>
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[24px] gap-y-[54px]">
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
                      className="w-[41.35px] h-[41.35px] bg-[#878787B2] rounded-[9.19px] flex justify-center pt-[11.49px] cursor-pointer"
                      onClick={() => openModal("link", item.virtualTourLink)}
                    >
                      <IoIosLink className="text-xl  text-[#FFFFFF] " />
                    </div>
                  )}
                  {item.videoLink && (
                    <div
                      className="w-[41.35px] h-[41.35px] bg-[#878787B2] rounded-[9.19px] flex justify-center pt-[11.49px] cursor-pointer"
                      onClick={() => openModal("video", item.videoLink)}
                    >
                      <FaVideo className="text-xl  text-[#FFFFFF] " />
                    </div>
                  )}
                  {item.gallery && item.gallery.length > 0 && (
                    <div
                      className="w-[41.35px] h-[41.35px] bg-[#878787B2] rounded-[9.19px] flex justify-center pt-[11.49px] cursor-pointer"
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
                    <h4 className="text-[#666666] font-semibold text-[20.98px] sm:text-[18px]">
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

                  <div className="flex gap-[28px] sm:gap-3 items-center mt-[23px]">
                    <div className="flex gap-[9px] items-center">
                      <IoBedOutline className="text-[#696969] text-2xl" />
                      <p className="md:text-[16px] text-[14px] sm:text-[13.5px] text-[#666666] font-normal">
                        {item.bedrooms} Bedrooms
                      </p>
                    </div>

                    <div className="flex gap-[9px] items-center">
                      <img src={bath} alt="" />
                      <p className="text-[16px] sm:text-[13.5px] text-[#666666] font-normal">
                        {item.bathrooms} Bathrooms
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-t border-[#E8E8E8] pt-[36.8px]">
                  <div className="flex items-center gap-1  ">
                    <FaNairaSign />
                    <p className="text-[22px] sm:text-[18px] font-semibold text-[#373737]">
                      {item.price}
                    </p>
                  </div>

                  <div className="flex gap-[25.84px] sm:gap-4 items-center pt-[3.45px] pr-[5.74px]">
                    <LuArrowRightLeft className="text-xl text-[#484848]" />
                    <IoShareSocial className="text-xl text-[#484848]" />
                    <button onClick={() => handleFavouriteClick(item._id)}>
                      <FaHeart
                        className={`text-xl transition-colors duration-300 ${
                          (user?.favourites || []).includes(item._id)
                            ? "text-[#FF0000]"
                            : "text-[#484848]"
                        } ${
                          updatingFavs.includes(item._id)
                            ? "opacity-50 animate-pulse"
                            : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* 1 */}
        </div>
      )}

      <div className="flex justify-center mt-[63px] gap-[15px] items-center">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 border rounded disabled:opacity-50"
        >
          <FaChevronLeft className="text-[#60697A75]  text-xl rounded-[3px]" />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`px-3 py-1 rounded ${
              num === currentPage ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            {num}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 border rounded disabled:opacity-50"
        >
          <FaChevronRight className="text-[#60697A75]  text-xl rounded-[3px]" />
        </button>
      </div>

      {/* DISCOVER */}

        <div className="pt-[129.44px] relative flex flex-col gap-[72px]">
        <h2 className="font-semibold text-[#0F1A1E] lg:text-[50px]  sm:text-[40px] text-[22px] text-center">
          Discover Our Popular Properties
        </h2>
        <div
          onClick={scrollLeft}
          className="bg-[#F4F4F4] w-[54px] h-[54px] flex items-center justify-center rounded-[27px] absolute bottom-[150px] left-[-28px] z-50 translate-y-[-50%]  cursor-pointer"
        >
          <FaLongArrowAltLeft className="text-2xl" />
        </div>
        <div
          id="popularScroll"
          className=" gap-[23px] flex relative overflow-x-auto scroll-smooth no-scrollbar"
        >
          {properties.map((item) => (
            <div
              key={item._id}
              className="lg:min-w-[290px] sm:min-w-[260px] min-w-[270px] bg-cover bg-center bg-no-repeat h-[412px]  relative rounded-t-[7px]  rounded-b-[4.5px] "
              style={{
                backgroundImage: `url(${
                  Array.isArray(item.mainImage)
                    ? item.mainImage[0]
                    : item.mainImage
                })`,
              }}
            >
              <div className="top-[270px] absolute pl-[17px] pt-2 text-white flex flex-col gap-[5px]  bg-[#4A4A4C33]   backdrop-blur-[4px] w-full h-[142px]">
                <div>
                  <div className="">
                    <h5 className="text-[18px] font-semibold">{item.title}</h5>
                    <div className="flex gap-[3px] items-center">
                      <FaNairaSign />
                      <p className="text-[18px] font-semibold ">{item.price}</p>
                    </div>
                  </div>

                  <div className="flex gap-[14px] items-center ">
                    <p className="text-[14px] font-normal">
                      {item.bedrooms} Bed{" "}
                    </p>
                    <p className="text-[14px] font-normal">
                      {" "}
                      {item.bathrooms} Bath{" "}
                    </p>
                    <p className="text-[14px] font-normal"> 720 sq ft </p>
                  </div>
                </div>

                <div className="flex gap-[11px] items-center ">
                  <MdLocationPin className="text-[#ffffff] text-l " />
                  <p className="text-[14px] font-normal">{item.location} </p>
                </div>
              </div>
            </div>
          ))}

        </div> 

        <div
          onClick={scrollRight}
          className="bg-[#3D9970] w-[54px] h-[54px] flex items-center justify-center rounded-[27px]  absolute bottom-[170px] right-[-28px] z-50 cursor-pointer in-w-[300px] max-w-[300px]"
        >
          <FaLongArrowAltRight className="text-2xl" />
        </div>
      </div> 

      {/* ================= Modal ================= */}
       {modalContent && (
        <div
          className="fixed inset-0  backdrop-blur-sm bg-[#2D2E2ECC]  flex items-center justify-center z-50  "
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg sm:p-4 md:max-w-[800px] max-w-[350px] w-full  md:min-w-[600px]  relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end items-end mb-4">
              <button className=" font-bold " onClick={closeModal}>
                <IoMdClose className="text-2xl cursor-pointer" />
              </button>
            </div>

            {modalContent.type === "gallery" && (
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                {modalContent.data.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Gallery ${idx}`}
                    className="w-[350px] md:w-full p-4 md:h-[400px] h-[250px] object-cover rounded"
                  />
                ))}
              </div>
            )}

            {modalContent.type === "video" && (
              <div className="md:w-full p-4 w-[350px] h-[400px]">
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

            {modalContent.type === "link" && (
              <iframe
                src={modalContent.data}
                className="md:w-full p-4 w-[350px] h-[400px]"
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
