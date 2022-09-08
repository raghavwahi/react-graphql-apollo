import React from "react";
import { useParams } from "react-router-dom";
import CountryInfo from "../CountryDetails/CountryInfo";

const CountryDetails = () => {
  const { id } = useParams();

  return <CountryInfo countryCode={id} />;
};

export default CountryDetails;
