const Country = ({ country }) => {
  return (
    <div>
      <h4>{country.name.common}</h4>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h6>Languages</h6>
      <ul>
        {Object.keys(country.languages).map((key) => (
          <li key={key}>{country.languages[key]}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={`The flag of ${country.name.common}`}
        style={{ width: "100px" }}
      />
      {<pre>{JSON.stringify(country, null, 2)}</pre>}
    </div>
  );
};

export default Country;
