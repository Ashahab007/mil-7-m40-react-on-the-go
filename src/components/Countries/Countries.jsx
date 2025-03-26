import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ responseCountries }) => {
  const countries = use(responseCountries);
  console.log(countries);

  return (
    <div>
      <h2>Travelling Countries: {countries.length}</h2>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca2} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
