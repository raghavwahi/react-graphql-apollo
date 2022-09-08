import React, { useState } from "react";
import Country from "./Country";
import SearchCountry from "./SearchCountry";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const filteredCountriesHandler = (filteredCountries) => {
    setCountries([...filteredCountries]);
  };

  const countriesList = countries.map((country) => {
    return (
      <Country
        key={country.code}
        countryCode={country.code}
        countryName={country.countryName}
      />
    );
  });
  return (
    <>
      <SearchCountry getFilteredCountries={filteredCountriesHandler} />
      {countriesList}
    </>
  );
};

export default Countries;
