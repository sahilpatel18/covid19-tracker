import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setAllCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setAllCountries]);

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">United States</option>
        {allCountries.map((country, i) => {
          return (
            <option key={i} value={country}>
              {country}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
