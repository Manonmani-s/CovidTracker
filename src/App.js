import React, { useEffect, useState } from "react";
import { fetchData } from "./api";
import styles from "./App.module.css";
import image from "./assets/logo.png";
import Cards from "./components/Cards/Cards.js";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

const App = () => {
  const [state, setState] = useState({
    data: {},
    country: "",
  });
  useEffect(() => {
    const mount = async () => {
      const data = await fetchData();
      setState({ data });
    };
    mount();
  }, []);

  const handleChange = async (country) => {
    const data = await fetchData(country);
    setState({ data, country: country });
    console.log(country);
    console.log(data);
  };

  const { data, country } = state;

  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} alt="" />
      <Cards data={data} />
      <CountryPicker handleChange={handleChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
