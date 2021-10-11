import Country from "./country";

const CountriesList = ({ filter, countries, showCountry }) => {
  const countriesList = countries.filter((country) =>
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
        <p>{country.name.official}</p>
        <button
          type="button"
          value={country.name.official}
          onClick={showCountry}
        >
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
