import { Grid2, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import { colors } from "../../Config/theme";
import Typewriter from "../TypeWriter";
import { Image } from "@mui/icons-material";
import Images from "../../Config/images";

const Home = () => {
  const className = useStyles();
  return (
    <Grid2 container className={className.container}>
      <Grid2 item size={6}>
        <Typography variant="h1" style={{ color: colors.white, height: 80 }}>
          <Typewriter
            text={"Hi, I'm Jayesh Jadav"}
            delay={100}
            infinite={true}
          />
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
      <div className={className.borderWrapper}>
        <img src={Images.profile} className={className.img} />
      </div>
    </Grid2>
  );
};

export default Home;
