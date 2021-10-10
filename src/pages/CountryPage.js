import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import CustomButton from "../components/CustomButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function CountryPage({ countryData }) {
  const { cca3 } = useParams(); //basically the country ID
  const history = useHistory();

  const [currentCountry, setCurrentCountry] = useState(
    countryData.countryData.filter((country) => {
      return country.cca3 === cca3; //Check to see which country
    })
  );

  const [nativeNames, setNativeNames] = useState(
    Object.values(currentCountry[0].name.nativeName)
      .map((value) => {
        return value.common; // Converts the Object into an Array
      })
      .filter((value, index, self) => {
        return self.indexOf(value) === index; // Removes all duplicates
      })
  );

  const [languages, setLanguage] = useState(
    Object.values(currentCountry[0].languages) // Converts the Object into an Array
  );

  const [currencies, setCurrencies] = useState(
    Object.values(currentCountry[0].currencies).map((value) => {
      return value.name; // Converts the Object into an Array
    })
  );

  const [borderCountries, setBorderCountries] = useState(
    currentCountry[0].borders?.map((borderCountry) => {
      let countryArray = countryData.countryData.filter((country) => {
        return country.cca3 === borderCountry;
      });

      return countryArray[0];
    })
  );

  function handleArrayToString(array) {
    let currentArray = array;
    let text = "";
    for (let index = 0; index < currentArray.length; index++) {
      if (index === 0) {
        text = currentArray[0];
      } else {
        text = `${text}, ${currentArray[index]}`;
      }
    }
    return text;
  }

  useEffect(() => {
    setCurrentCountry(
      countryData.countryData.filter((country) => {
        return country.cca3 === cca3; //Check to see which country
      })
    );

    setNativeNames(
      Object.values(currentCountry[0].name.nativeName)
        .map((value) => {
          return value.common; // Converts the Object into an Array
        })
        .filter((value, index, self) => {
          return self.indexOf(value) === index; // Removes all duplicates
        })
    );

    setLanguage(
      Object.values(currentCountry[0].languages) // Converts the Object into an Array
    );

    setCurrencies(
      Object.values(currentCountry[0].currencies).map((value) => {
        return value.name; // Converts the Object into an Array
      })
    );

    setBorderCountries(
      currentCountry[0].borders?.map((borderCountry) => {
        let countryArray = countryData.countryData.filter((country) => {
          return country.cca3 === borderCountry;
        });

        return countryArray[0];
      })
    );
  }, [cca3]);

  return (
    <div className="main country-page">
      <CustomButton
        className="margin-bottom"
        task={() => {
          history.push("/");
        }}
        text="Back"
        icon={<ArrowBackIcon />}
      />

      <div>
        <img
          className="center-content"
          src={currentCountry[0].flags.svg}
          alt={`Flag of ${currentCountry[0].name.common}`}
        />
        <div>
          <h2>{currentCountry[0].name.common}</h2>
          <div>
            <div>
              <p>
                <span className="bold">Native Name:</span>{" "}
                {handleArrayToString(nativeNames)}
              </p>
              <p>
                <span className="bold">Population:</span>{" "}
                {currentCountry[0].population.toLocaleString()}
              </p>
              <p>
                <span className="bold">Region:</span> {currentCountry[0].region}
              </p>
              <p>
                <span className="bold">Sub Region:</span>{" "}
                {currentCountry[0].subregion}
              </p>
              <p>
                <span className="bold">Capital:</span>{" "}
                {currentCountry[0].capital}
              </p>
            </div>
            <div>
              <p>
                <span className="bold">Top Level Domain:</span>{" "}
                {currentCountry[0].tld}
              </p>
              <p>
                <span className="bold">Currencies:</span>{" "}
                {handleArrayToString(currencies)}
              </p>
              <p>
                <span className="bold">Languages:</span>{" "}
                {handleArrayToString(languages)}
              </p>
            </div>
          </div>
          <div>
            {borderCountries ? (
              <div className="border-countries">
                <p className="bold">Border Countries:</p>
                <div className="margin-bottom">
                  {borderCountries.map((country, index) => {
                    return (
                      <Link to={`/country/${country.cca3}`}>
                        <CustomButton key={index} text={country.name.common} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
