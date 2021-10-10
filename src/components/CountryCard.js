import React from "react";

function CountryCard({ countryData }) {
  return (
    <div className="country-card border-shadow">
      <img
        src={countryData.flags.svg}
        alt={`Flag of ${countryData.name.common}`}
      />
      <div>
        <h4>{countryData.name.common}</h4>
        <p>Population: {countryData.population.toLocaleString()}</p>
        <p>Region: {countryData.region}</p>
        <p>Capital: {countryData.capital}</p>
      </div>
    </div>
  );
}
export default CountryCard;
