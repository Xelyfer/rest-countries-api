import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [countryData, setCountryData] = useState({
    countryData: [{}],
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        await axios
          .get("https://restcountries.com/v3.1/all")
          .then(({ data }) => {
            setCountryData({
              countryData: data,
            });

            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <Router>
      <div className={darkMode ? "App dark-mode" : "App light-mode"}>
        <Header
          darkMode={darkMode}
          handleDarkMode={() => {
            setDarkMode(!darkMode);
          }}
        />
        {isLoading ? (
          <p>Loading Data....</p>
        ) : (
          <Switch>
            <Route exact path="/">
              <Home countryData={countryData} />
            </Route>
            <Route path="/country/:cca3">
              <CountryPage countryData={countryData} />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}
export default App;
