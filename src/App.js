import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log("error while fetching the data ", err));
  }, []);
  return (
    <div className="App">
      <h1>Countries</h1>
      <div className="container">
        <div className="row">
          {countries.map((country) => (
            <div
              className="p-1 col-4 col-md-3 col-lg-2"
              key={country.name.common}
            >
              <div className="card">
                <img
                  src={country.flags.png}
                  className="card-img-top"
                  alt={country.name.common}
                />
                <div className="card-body">
                  <h5 className="card-title">{country.name.common}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
