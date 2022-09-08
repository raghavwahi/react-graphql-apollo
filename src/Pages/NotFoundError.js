import React from "react";
import { Link } from "react-router-dom";

const NotFoundError = () => {
  return (
    <>
      <h1>ERROR 404.</h1>
      <p>
        <Link to="/">Click</Link> Here to go to home page.
      </p>
    </>
  );
};

export default NotFoundError;
