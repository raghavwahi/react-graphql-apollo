import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetails from "../Pages/CountryDetails";
import CountryList from "../Pages/CountryList";
import NotFoundError from "../Pages/NotFoundError";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/:id" element={<CountryDetails />} />
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
