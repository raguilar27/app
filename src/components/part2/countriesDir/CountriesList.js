import Country from "./country";

const CountriesList = ({ filter, countries, showCountry }) => {
  const countriesList = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(filter.toLowerCase()) ||
      country.name.official.toLowerCase().includes(filter.toLowerCase())
  );

  let listLength = countriesList.length;

  if (listLength === 1) {
    return (
      <div>
        <Country country={countriesList[0]} />
      </div>
    );
  } else if (listLength <= 10 && listLength >= 2) {
    return countriesList.map((country) => (
      <div key={country.name.common}>
        <p>{country.name.common}</p>
        <button type="button" value={country.name.common} onClick={showCountry}>
          show
        </button>
      </div>
    ));
  } else if (listLength > 10 && listLength !== 0) {
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
