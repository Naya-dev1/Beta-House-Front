import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MainHome from "../home/MainHome";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { toast } from "react-hot-toast";

const HomePage = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProperties = async (page = 1) => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://beta-house-backend-fteb.onrender.com/api/property?page=${page}&limit=6`
      );
      const data = await res.json();
      setProperties(data.data);
      setTotalPages(data.totalPages || 1);
      setCurrentPage(page);
    } catch (error) {
      console.log("Error fetching properties:", error);
      toast.error("Failed to fetch properties");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    const results = properties.filter((item) => {
      const matchesLocation = location
        ? item.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesType = propertyType
        ? item.propertyType.toLowerCase().includes(propertyType.toLowerCase())
        : true;
      const matchesBedrooms =
        bedrooms > 0 ? item.bedrooms === Number(bedrooms) : true;

      console.log({
        title: item.title,
        matchesLocation,
        matchesType,
        matchesBedrooms,
      });

      return matchesLocation && matchesType && matchesBedrooms;
    });

    setFilteredProperties(results);
  }, [location, propertyType, bedrooms, properties]);


  // =================

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    fetchProperties(page);
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
          onSearch={() => {}}
          locations={locationOptions}
          propertyTypes={propertyTypeOptions}
        />
      </div>
      <MainHome
        properties={
          filteredProperties.length > 0 ? filteredProperties : properties
        }
        // favourites={user?.favourites || []}
        // onToggleFavourite={toggleFavourite}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        loading={loading}
      />
      <Footer />
    </div>
  );
};

export default HomePage;


// https://youtube.com/shorts/sPbZqRF_daw?si=Li6UvxzpJWiUg4Hs



// white villa https://youtube.com/shorts/XkKlD9gdSfY?si=aEj3aEOk_2n-_9du