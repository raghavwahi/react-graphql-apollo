import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_COUNTRY } from "./../queries/country";
import { Link } from "react-router-dom";

const CountryInfo = (props) => {
  const { data, error, loading } = useQuery(FETCH_COUNTRY, {
    variables: { code: props.countryCode },
  });

  if (loading) return <p>Loading...</p>;
  if (error || !data.country) return <p>Oops! Something went wrong</p>;

  const languages = data.country.languages.map((language) => {
    return <li key={language.code}>{language.name}</li>;
  });

  return (
    <div>
      <Link to={-1}>Back</Link>
      <h1>
        Country: {data.country.name} ({data.country.emoji})
      </h1>
      <h3>Native: {data.country.native}</h3>
      <h4>Currency: {data.country.currency}</h4>
      <h4>Capital: {data.country.capital}</h4>

      {languages && (
        <>
          <p>
            <b>Languages Spoken:</b>
          </p>
          <ul>{languages}</ul>
        </>
      )}
    </div>
  );
};

export default CountryInfo;
