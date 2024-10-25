import React from "react";
import useStyles from "./styles";
import { Avatar, Grid2, Typography } from "@mui/material";
import { colors } from "../../Config/theme";

function Contact() {
  const className = useStyles();
  return (
    <Grid2 container className={className.container}>
      <Grid2 item size={4} className={className.borderWrapper}>
        <Avatar className={className.img} />
        {/* <img src={Images.profile} className={className.img} /> */}
      </Grid2>
      <Grid2 item size={8}>
        <Typography variant="h1" style={{ color: colors.white, height: 80 }}>
          Contact Me
        </Typography>
      </Grid2>
    </Grid2>
  );
}

export default Contact;
