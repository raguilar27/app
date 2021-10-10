import axios from "axios";
import { useState, useEffect } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [showCountry, setShowCountry] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleCountry = (event) => {
    event.preventDefault();
    setShowCountry(event);
  };

  return (
    <div>
      <div>
        find countries
        <input value={query} onChange={handleQuery} />
      </div>
      <div>
        {countries
          .filter((country) =>
            country.name.common.toLowerCase().includes(query.toLowerCase())
          )
          .map((country) => (
            <div key={country.name.common}>
              <h4>{country.name.common}</h4>
              <p>{country.capital}</p>
              <p>{country.population}</p>
              <h6>Languages</h6>
              <pre>{JSON.stringify(country, null, 2)}</pre>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Countries;
