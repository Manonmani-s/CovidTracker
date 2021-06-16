import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import cx from "classnames";
import React from "react";
import CountUp from "react-countup";
import styles from "./Card.module.css";

const CustomCard = ({ className, CardTitle, value, date, description }) => {
  console.log(className);
  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, className)}
    >
      <CardContent>
        <Typography color="textSecondary">{CardTitle}</Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} seperator="," duration={3} />
        </Typography>
        <Typography color="textSecondary">
          {new Date(date).toDateString()}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Grid>
  );
};

export default CustomCard;
