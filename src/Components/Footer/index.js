import { Grid2, IconButton, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../Config/theme";
import { ArrowUpward } from "@mui/icons-material";

function Footer(props) {
  const { handleScrollToSection = () => null, activeSection = "home" } = props;
  return (
    <Grid2
      container
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 7rem 3rem 7rem",
      }}
    >
      <Typography
        variant="h1"
        style={{ color: colors.white, textAlign: "center" }}
      >
        Footer
      </Typography>
      <IconButton
        onClick={(event) => handleScrollToSection(event, "home")}
        style={{
          backgroundColor: colors.secondary,
          transition: "0.5s",
          height: 50,
          width: 50,
        }}
      >
        <ArrowUpward />
      </IconButton>
    </Grid2>
  );
}

export default Footer;
