import axios from "axios";
import { useState, useEffect } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <div>
        find countries
        <input value={query} onChange={handleQuery} />
      </div>
      <div>
        {countries
          .filter((country) => {
            if (!query) return true;
            if (country.name.official.includes(query)) return true;
          })
          .map((country) => (
            <pre key={country.name.official}>
              {JSON.stringify(country, 2, null)}
            </pre>
          ))}
      </div>
    </div>
  );
};

export default Countries;
