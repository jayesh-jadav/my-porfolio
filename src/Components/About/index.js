import React from "react";
import useStyles from "./styles";
import { Avatar, Grid2, Typography } from "@mui/material";
import { colors } from "../../Config/theme";
import Typewriter from "../TypeWriter";

function About() {
  const className = useStyles();
  return (
    <Grid2 container className={className.container}>
      <Grid2 item size={4} className={className.borderWrapper}>
        <Avatar className={className.img} />
        {/* <img src={Images.profile} className={className.img} /> */}
      </Grid2>
      <Grid2 item size={8}>
        <Typography variant="h1" style={{ color: colors.white, height: 80 }}>
          <Typewriter text={"About Me"} delay={100} infinite={true} />
        </Typography>
        <Typography
          variant="h3"
          style={{
            color: colors.transparent,
            WebkitTextStroke: `0.8px ${colors.secondary}`,
          }}
        >
          Frontend Developer
        </Typography>
        <Typography variant="title" style={{ color: colors.white }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Grid2>
    </Grid2>
  );
}

export default About;
