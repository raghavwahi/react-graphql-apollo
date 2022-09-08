import React from "react";
import { Link } from "react-router-dom";

const Country = (props) => {
  return (
    <div>
      <h1>
        <Link to={`/${props.countryCode}`}>{props.countryName}</Link>
      </h1>
      <hr />
    </div>
  );
};

export default Country;
