// ? Challange 1: Lift up the state to handle child component event i.e যে country তে click করবো তা ui এ দেখাব। যা parent i.e <Countries> থেকে কাজ করতে হয়।

// ? Challenge 2: Lift up the state to handle child component event i.e এবার আলাদা button এর মাধ্যমে যে flag টা add করবো টা ui তে দেখাব।

import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleAddFlags }) => {
  // ? 1.3 receive the props handleVisitedCountries
  // ? 2.4 receive the props handleAddFlags
  // console.log(country);

  const [visited, setVisited] = useState(false);

  const handleOnClick = () => {
    // console.log("click");
    if (visited === true) {
      setVisited(false);
    } else {
      setVisited(true);

      //? 1.4 handleVisitedCountries is an eventHandler so called in another eventHandler and passing the country as a parameter.
      handleVisitedCountries(country);
      console.log("handleVisitedCountries working");
    }
    //setVisited(!visited);//It's the shortcut of if else condition in one line
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      {/* এখানে className টা dynamically design করা হয়েছে। */}
      <h4>Name: {country.name.common}</h4>
      <img src={country.flags.png} alt="" srcset="" />
      <h5>Population: {country.population}</h5>
      <h5>Independent: {country.independent ? "Free" : "Not Free"}</h5>
      <button onClick={handleOnClick}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      {/* 2.5 */}
      <button
        onClick={() => {
          handleAddFlags(country.flags.png);
        }}
      >
        Add Flags
      </button>
    </div>
  );
};
export default Country;
