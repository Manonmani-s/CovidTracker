import { FormControl, NativeSelect } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleChange }) => {
  const [fetchedCountry, setFetchedCountry] = useState([]);
  console.log(fetchedCountry);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountry(await fetchCountries());
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <FormControl className={styles.FormControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="">Global</option>
          {fetchedCountry.map((country, index) => (
            <option value={country} key={index}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
