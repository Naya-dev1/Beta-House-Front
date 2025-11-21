import React, { useState } from "react";

const HeroSection = ({
  location,
  setLocation,
  propertyType,
  setPropertyType,
  bedrooms,
  setBedrooms,
  onSearch,
  locations = [],
  propertyTypes = [],
}) => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [propertyOpen, setPropertyOpen] = useState(false);

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col  mt-[68.24px]">
        <div className="ml-[229px] mr-[223px] text-white w-[988px] px-[102px] space-y-[24px] text-center ">
          <h1 className="text-[64px] font-bold ">Browse Our Properties</h1>
          <p className="text-[26px] font-normal leading-[160%]  ">
            Find your perfect home among our curated properties. Start browsing
            now!
          </p>
        </div>

        <div className="bg-[#FFFFFF33] ml-[104px] mr-[98px] mt-[52px] mb-[87px]">
          <div className="mx-[27px] my-[22px] bg-white flex h-[85.74px] items-center">
            <div className="ml-[50px]  mr-[90px] flex flex-col  w-[132.84px] relative">
              <label htmlFor="" className="text-[14px] ">
                LOCATION
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="eg. Gbagada"
                className="placeholder:text-[15px] outline-none"
                onClick={() => setLocationOpen(!locationOpen)}

              />

              {location && filteredLocations.length > 0 && (
                <ul className="absolute top-17 bg-white shadow-md p-3 rounded-md w-[260px] z-10 left-[-50px]">
                  {filteredLocations.map((loc) => (
                    <li key={loc} onClick={() => setLocation(loc)}>
                      {loc}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="h-[46px] border border-[#CAD4DE]  w-[0px] "></div>

            <div className="flex flex-col items-center w-[179px] ml-[66px] mr-[53px] relative">
              <label className="text-[14px]">PROPERTY TYPE</label>
              <input
                type="text"
                readOnly
                value={propertyType}
                placeholder="eg. Duplex, Bedroom Flat"
                className="placeholder:text-[15px] outline-none"
                onClick={() => setPropertyOpen(!propertyOpen)}
              />

              {propertyOpen && propertyTypes.length > 0 && (
                <ul className="absolute top-17 bg-white shadow-md rounded-md w-[300px] z-10 p-3 ">
                  {propertyTypes.map((type) => (
                    <li
                      key={type}
                      onClick={() => {
                        setPropertyType(type);
                        setPropertyOpen(false);
                      }}
                      className="cursor-pointer px-3 py-2 hover:bg-gray-200"
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="h-[46px] border border-[#CAD4DE]  w-[0px] "></div>

            <div className="flex flex-col items-center gap-[9px] ml-[90px] mr-[90px] w-[104px]">
              <label htmlFor="" className="text-[14px] ">
                BEDROOM
              </label>
              <div className="flex gap-[26px]">
                <p
                  className="text-[14px] leading-none text-[#30343B] rounded-[50px] border border-[#30343B] w-[21px] h-[21px] flex items-center justify-center"
                  onClick={() => setBedrooms(Math.max(0, bedrooms - 1))}
                >
                  -
                </p>
                <p>{bedrooms}</p>
                <p
                  className="text-[14px] leading-none text-[#30343B] rounded-[50px] border border-[#30343B] w-[21px] h-[21px] flex items-center justify-center"
                  onClick={() => setBedrooms(bedrooms + 1)}
                >
                  +
                </p>
              </div>
            </div>

            <button
              className="bg-[#3D9970] h-[85.77px] text-white w-[297px]"
              onClick={onSearch}
            >
              Find Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
