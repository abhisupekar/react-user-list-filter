import "./styles.css";
import axios from "axios";
import Card from "./Card";
import { useState, useEffect } from "react";

export default function App() {
  const [usersData, setUserData] = useState(null);
  const [country, setCountries] = useState("");
  const [countryFilter, setCountryFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://randomuser.me/api/?results=100"
        );
        console.log(response);
        setUserData(response);
        const countries = [
          ...new Set(response.results.map((item) => item.location.country))
        ];
        setCountries(countries);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  let countryButton = "";
  if (country) {
    countryButton = country.map((country) => {
      return <button id="country">{country}</button>;
    });
  }

  return (
    <div>
      {countryButton}
      {usersData ? <Card user={usersData} /> : ""}
    </div>
  );
}
