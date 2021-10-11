const Country = ({ country, weather }) => {
  return (
    <div>
      <h4>{country.name.common}</h4>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h6>Spoken Languages</h6>
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
      <h4>Weather in {country.capital}</h4>
      <h6>Temperature: {weather.current.temperature} Celcius</h6>
      <img
        src={weather.current.weather_icons}
        alt={`Picture of ${country.capital}'s weather`}
        style={{ width: "100px" }}
      />
      <h6>
        Wind: {weather.current.wind_speed}mph direction{" "}
        {weather.current.wind_dir}
      </h6>
    </div>
  );
};

export default Country;
