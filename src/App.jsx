import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const fetchCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
};

function App() {
  const responseCountries = fetchCountries();
  return (
    <>
      <h1>World On The Go</h1>
      <Suspense fallback={<h6>Nadim Mia is Loading . . . . . </h6>}>
        <Countries responseCountries={responseCountries}></Countries>
      </Suspense>
    </>
  );
}

export default App;
