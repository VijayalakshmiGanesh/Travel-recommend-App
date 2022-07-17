import "./styles.css";
import React, { useState } from "react";

const continentDict = {
  USA: [
    { countryName: "California", Place: "Las Vegas", Rating: "⭐ 4.9/5" },
    { countryName: "New York", Place: "Boston", Rating: "⭐ 4.5/5" },
    { countryName: "Florida", Place: "Miami", Rating: "⭐ 4/5" }
  ],
  Europe: [
    { countryName: "France", Place: "Paris", Rating: "⭐ 4.3/5" },
    { countryName: "Italy", Place: "Rome", Rating: "⭐ 4.2/5" },
    { countryName: "Netherlands", Place: "Amsterdam", Rating: "⭐ 4.1/5" }
  ],
  Asia: [
    { countryName: "India", Place: "Bangalore", Rating: "⭐ 4.7/5" },
    { countryName: "Malaysia", Place: "Kuala Lumpur", Rating: " ⭐4.5/5" },
    { countryName: "Thai land", Place: "Bangkok", Rating: " ⭐3.8/5" }
  ]
};

// var continentArr = Object.keys(continentDict);

export default function App() {
  const [selectedCountry, setCountry] = useState("Asia");
  function continentSelector(countries) {
    setCountry(countries);
  }

  return (
    <div className="App">
      <h1>🧳 TRAVEL ✈️</h1>
      <p>Checkout my favorite countries under each Continents</p>
      <br />
      <hr />
      <br />
      <div id="continent">
        {Object.keys(continentDict).map((countries) => {
          return (
            <span onClick={() => continentSelector(countries)}>
              {countries}
            </span>
          );
        })}
      </div>

      <div>
        <br />

        <ul>
          {continentDict[selectedCountry].map((item) => (
            <li key={item.countryName}>
              {" "}
              <div id="countryName">{item.countryName}</div>
              <div id="city">{item.Place}</div>
              <div id="city">{item.Rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
