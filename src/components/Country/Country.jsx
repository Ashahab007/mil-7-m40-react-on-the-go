import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  console.log(country);

  const handleOnClick = () => {
    console.log("click");
  };
  return (
    <div className="country">
      <h4>Name: {country.name.common}</h4>
      <img src={country.flags.png} alt="" srcset="" />
      <h5>Population: {country.population}</h5>
      <button onClick={handleOnClick}>Not Visited</button>
    </div>
  );
};
export default Country;
