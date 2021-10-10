import React, { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import CountryCard from "../components/CountryCard";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";

function Home({ countryData }) {
  const [noOfElements, setNoOfElements] = useState(10);
  const [dataToShow, setDataToShow] = useState({
    countryData: countryData.countryData.slice(0, noOfElements),
  });

  const [filterRegionBy, setFilterRegionBy] = useState("");
  const [searchBy, setSearchBy] = useState("");

  useEffect(() => {
    if (searchBy !== "") {
      if (searchBy.length === 2) {
        setDataToShow({
          countryData: countryData.countryData.filter(
            (country) => country.cca2.toLowerCase() === searchBy.toLowerCase()
          ),
        });
      } else if (searchBy.length === 3) {
        setDataToShow({
          countryData: countryData.countryData.filter(
            (country) => country.cca3.toLowerCase() === searchBy.toLowerCase()
          ),
        });
      } else {
        setDataToShow({
          countryData: countryData.countryData.filter(
            (country) =>
              country.name.common.toLowerCase() === searchBy.toLowerCase()
          ),
        });
      }
    } else if (filterRegionBy !== "" && filterRegionBy !== "All") {
      setDataToShow({
        countryData: countryData.countryData
          .filter((country) => country.region === filterRegionBy)
          .slice(0, noOfElements),
      });
    } else {
      setDataToShow({
        countryData: countryData.countryData.slice(0, noOfElements),
      });
    }
  }, [searchBy, filterRegionBy, noOfElements]);

  return (
    <div className="main">
      <div>
        <SearchBar
          handleSearch={(searchText) => {
            setNoOfElements(10);
            setFilterRegionBy("");
            setSearchBy(searchText);
          }}
        />
        <FilterBar
          handleFilterBy={(value) => {
            setNoOfElements(10);
            setSearchBy("");
            setFilterRegionBy(value);
          }}
        />
      </div>
      <div className="main-countries">
        {dataToShow.countryData?.map((country, index) => (
          <Link to={`/country/${country.cca3}`}>
            <CountryCard key={index} countryData={country} />
          </Link>
        ))}
      </div>
      <div className="center-content">
        {dataToShow.countryData?.length < countryData.countryData?.length &&
        searchBy === "" ? (
          <CustomButton
            className="margin-bottom"
            task={() => {
              setNoOfElements(noOfElements + 10);
            }}
            text="Load More"
          />
        ) : null}
      </div>
    </div>
  );
}

export default Home;
