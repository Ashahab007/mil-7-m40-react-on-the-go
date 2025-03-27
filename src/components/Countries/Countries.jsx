import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ responseCountries }) => {
  // ? 1.1 Make and update state on parent of <Countries> component
  const [visitedCountries, setVisitedCountries] = useState([]);

  // ? 1.2 Create an eventhandler and passed as props of <Country></Country> component

  const handleVisitedCountries = (country) => {
    //? 1.5 receive the country from  handleVisitedCountries(country)
    // console.log("receive the country", country.name.common);
    //? 1.6 এখানে সাধারণত push করে array তে add করা যেত কিন্তু react এ primitive and non-primitive data type এর ক্ষেত্রে state update different ভাবে কাজ করতে হয়। primitive data type change এর সাথে সাথে update হয়ে যায় কিন্তু non-primitive data type এর ক্ষেত্রে নুতুন reference এ  নিয়ে  সেটাকে রাখতে হয় যাতে দুইটা দুই reference এর আলাদা জিনিস। তা করার জন্য একটা নতুন reference এ  copy করে রেখে নতুন update add করতে হয়। নিম্নে তাই করা হল।
    const newVisitedCountries = [...visitedCountries, country];
    console.log(newVisitedCountries[0].name.common);

    //? 1.7 set the newVisitedCountries to the visitedCountries
    setVisitedCountries(newVisitedCountries);
  };

  // ? 2.1
  const [visitedFlags, setVisitedFlags] = useState([]);
  // ? 2.2
  const handleAddFlags = (flags) => {
    console.log("Flag is added", flags);
    // ? 2.6
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
    console.log("Flag is added", visitedFlags);
  };

  const countries = use(responseCountries);
  console.log(countries);

  return (
    <div>
      <h2>Travelling Countries: {countries.length}</h2>
      <h2>Country Travelled: {visitedCountries.length} </h2>
      <div className="visited-flags">
        {visitedFlags.map((flag, index) => (
          <img src={flag} key={index}></img> //এখানে যেহেতু id নাই তাই index দিয়ে key এর error টা solve করা হয়েছে।
        ))}
      </div>
      <ol>
        {/* 1.8 Loop over the visitedCountries  */}
        {visitedCountries.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            // 2.3
            handleAddFlags={handleAddFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

/****
 Note: To deploy in netlify 
 * 1. in terminal type npm run build
 * 2. A dist folder is created in file explorer
 * 3. Now drag only the dist folder to netlify website to deploy
*/
