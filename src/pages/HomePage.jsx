import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MainHome from "../home/MainHome";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const HomePage = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [properties, setProperties] = useState([]);

  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/property");
        const data = await res.json();
        console.log("DATA FROM BACKEND:", data);
        setProperties(data.data);
      } catch (error) {
        console.log("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleSearch = () => {
    const results = properties.filter((item) => {
      const matchesLocation = location
        ? item.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesType = propertyType
        ? item.propertyType.toLowerCase().includes(propertyType.toLowerCase())
        : true;
      const matchesBedrooms = bedrooms > 0 ? item.bedrooms === bedrooms : true;

      console.log({
        title: item.title,
        matchesLocation,
        matchesType,
        matchesBedrooms,
      });

      return matchesLocation && matchesType && matchesBedrooms;
    });

    console.log("Filtered results:", results);
    setFilteredProperties(results);
  };

  const locationOptions = [...new Set(properties.map((p) => p.location))];
  const propertyTypeOptions = [
    ...new Set(properties.map((p) => p.propertyType)),
  ];

  return (
    <div>
      <div className="hero">
        <NavBar />
        <HeroSection
          location={location}
          setLocation={setLocation}
          propertyType={propertyType}
          setPropertyType={setPropertyType}
          bedrooms={bedrooms}
          setBedrooms={(val) => setBedrooms(Math.min(val, 10))}
          onSearch={handleSearch}
          locations={locationOptions}
          propertyTypes={propertyTypeOptions}
        />
      </div>
      <MainHome properties={filteredProperties} />
      <Footer />
    </div>
  );
};

export default HomePage;
