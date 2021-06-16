import { Grid } from "@material-ui/core";
import React from "react";
import Card from "../Card/Card.js";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Card
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          date={new Date(lastUpdate)}
          description="MNumber of active cases of Covid-19"
        />
        <Card
          className={styles.recovered}
          cardTitle="recovered"
          value={recovered.value}
          date={new Date(lastUpdate)}
          description="MNumber of recovered cases of Covid-19"
        />
        <Card
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          date={new Date(lastUpdate)}
          description="Number of death cases of Covid-19"
        />
      </Grid>
    </div>
  );
};

export default Cards;
