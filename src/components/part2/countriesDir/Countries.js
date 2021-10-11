import axios from "axios";
import { useState, useEffect } from "react";
import Filter from "./filter";
import CountriesList from "./CountriesList";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [weather, setWeather] = useState([]);
  const [capital, setCapital] = useState("Helsinki");
  const newAccessKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${newAccessKey}&query=${capital}`
      )
      .then((res) => {
        setWeather(res.data);
      });
  }, [newAccessKey, capital]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
    setCapital(capital);
  };

  const showCountry = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  return (
    <div>
      <Filter filter={filter} handleFilter={handleFilter} />
      <CountriesList
        filter={filter}
        countries={countries}
        showCountry={showCountry}
        weather={weather}
      />
    </div>
  );
};

export default Countries;
