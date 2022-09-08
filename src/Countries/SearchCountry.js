import React, { useEffect, useRef, useState } from "react";
import { countries } from "countries-list";

const filterCountryListHandler = (searchString) => {
  const countriesList = [];

  for (const countryCode of Object.keys(countries)) {
    const name = countries[countryCode].name;
    if (name.toLowerCase().includes(searchString.toLowerCase())) {
      countriesList.push({ code: countryCode, countryName: name });
    }
  }

  return countriesList;
};

const SearchCountry = (props) => {
  const [searchString, setSearchString] = useState("");
  const inputEl = useRef();

  const filterCountriesChangeHandler = (event) => {
    setSearchString(event.target.value);
    props.getFilteredCountries([
      ...filterCountryListHandler(event.target.value),
    ]);
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputEl}
        type="text"
        placeholder="Enter country name"
        value={searchString}
        onChange={filterCountriesChangeHandler}
        onFocus={filterCountriesChangeHandler}
      />
    </div>
  );
};

export default SearchCountry;
