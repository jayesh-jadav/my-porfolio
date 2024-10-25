import { Avatar, Grid2, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import { colors } from "../../Config/theme";
import Typewriter from "../TypeWriter";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import Images from "../../Config/images";
import XIcon from "@mui/icons-material/X";

const Home = () => {
  const className = useStyles();
  return (
    <Grid2 container className={className.container}>
      <Grid2 item size={8}>
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
        <Grid2 className={className.socialContainer}>
          <div className={className.iconButton}>
            <Instagram
              className={className.socialIcon}
              style={{
                background: colors.inGradient,
              }}
            />
            <Typography variant="subTitle" className={className.socialText}>
              Instagram
            </Typography>
          </div>
          <div className={className.iconButton}>
            <Facebook
              style={{ backgroundColor: "#1877F2" }}
              className={className.socialIcon}
            />
            <Typography variant="subTitle" className={className.socialText}>
              Facebook
            </Typography>
          </div>
          <div className={className.iconButton}>
            <LinkedIn
              style={{ backgroundColor: "#0A66C2" }}
              className={className.socialIcon}
            />
            <Typography variant="subTitle" className={className.socialText}>
              Inked In
            </Typography>
          </div>
          <div className={className.iconButton}>
            <XIcon
              style={{ backgroundColor: "#1D1D1D" }}
              className={className.socialIcon}
            />
            <Typography variant="subTitle" className={className.socialText}>
              Twitter
            </Typography>
          </div>
        </Grid2>
      </Grid2>
      <Grid2 item xs={4}>
        <div className={className.borderWrapper}>
          <Avatar className={className.img} />
          {/* <img src={Images.profile} className={className.img} /> */}
        </div>
      </Grid2>
    </Grid2>
  );
};

export default Home;
