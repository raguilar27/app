import axios from "axios";
import { useState, useEffect } from "react";
import Filter from "./filter";
import CountriesList from "./CountriesList";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [showCountry, setShowCountry] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleCountry = (event) => {
    event.preventDefault();
    setShowCountry(event);
  };

  return (
    <div>
      <Filter filter={filter} handleFilter={handleFilter} />
      <CountriesList
        filter={filter}
        countries={countries}
        handleCountry={handleCountry}
        showCountry={showCountry}
      />
    </div>
  );
};

export default Countries;
