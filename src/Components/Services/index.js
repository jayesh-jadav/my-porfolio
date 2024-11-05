import { Grid2, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import ThemeCard from "../ThemeCard";

function Services() {
  const className = useStyles();
  return (
    <Grid2 container className={className.container}>
      <Grid2 item>
        <Typography variant="h1">Services</Typography>
      </Grid2>
      <ThemeCard />
    </Grid2>
  );
}

export default Services;
