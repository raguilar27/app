import Country from "./country";

const CountriesList = ({ filter, countries, handleCountry, showCountry }) => {
  const countriesList = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  let listLength = countriesList.length;

  if (listLength === 1) {
    return (
      <div>
        <Country />
      </div>
    );
  } else if (listLength <= 10 && listLength >= 2) {
    return (
      <div>
        <p>map the counrties and create show button</p>
      </div>
    );
  } else if (listLength > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default CountriesList;
