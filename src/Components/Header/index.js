import {
  Grid2,
  Tab,
  Tabs,
  Typography,
  Drawer,
  IconButton,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { Close, Menu } from "@mui/icons-material";
import useStyles from "./styles";
import { colors } from "../../Config/theme";

const Header = (props) => {
  const { value = "home", handleChange = () => null } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Grid2
      container
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 7rem 0px 7rem",
      }}
    >
      <Typography
        style={{
          color: "transparent",
          WebkitTextFillColor: "transparent",
          fontSize: 30,
          fontWeight: "bold",
          backgroundImage: colors.gradient,
          backgroundSize: "cover",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          WebkitTextStroke: `1.5px ${colors.secondary}`,
        }}
      >
        Jayesh Jadav
      </Typography>

      {/* Icon Button for Mobile Menu */}
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          display: {
            xs: "block",
            md: "none",
            color: colors.white,
            transition: "1s",
          },
        }}
      >
        <Menu />
      </IconButton>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            backgroundColor: colors.background,
            height: "100%",
            paddingTop: "30px",
          }}
        >
          <IconButton
            sx={{
              display: {
                color: colors.white,
                position: "absolute",
                top: 0,
                left: 0,
              },
            }}
            onClick={toggleDrawer(false)}
          >
            <Close />
          </IconButton>
          <Tabs
            value={value}
            onChange={(event, newValue) => handleChange(event, newValue)}
            classes={{ indicator: classes.indicator }}
            orientation="vertical"
            sx={{ width: 250 }}
          >
            <Tab value={"home"} label="Home" className={classes.tab} />
            <Tab value={"about"} label="About" className={classes.tab} />
            <Tab value={"services"} label="Services" className={classes.tab} />
            <Tab value={"contact"} label="Contact" className={classes.tab} />
          </Tabs>
        </Box>
      </Drawer>

      {/* Desktop Tabs */}
      <Tabs
        value={value}
        onChange={(event, newValue) => handleChange(event, newValue)}
        classes={{ indicator: classes.indicator }}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Tab value={"home"} label="Home" className={classes.tab} />
        <Tab value={"about"} label="About" className={classes.tab} />
        <Tab value={"services"} label="Services" className={classes.tab} />
        <Tab value={"contact"} label="Contact" className={classes.tab} />
      </Tabs>
    </Grid2>
  );
};

export default Header;
