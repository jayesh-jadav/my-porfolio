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

const Header = () => {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setDrawerOpen(false);
  };

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
            onChange={handleChange}
            classes={{ indicator: classes.indicator }}
            orientation="vertical"
            sx={{ width: 250 }}
          >
            <Tab label="Home" className={classes.tab} />
            <Tab label="About" className={classes.tab} />
            <Tab label="Services" className={classes.tab} />
            <Tab label="Contact" className={classes.tab} />
          </Tabs>
        </Box>
      </Drawer>

      {/* Desktop Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{ indicator: classes.indicator }}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Tab label="Home" className={classes.tab} />
        <Tab label="About" className={classes.tab} />
        <Tab label="Services" className={classes.tab} />
        <Tab label="Contact" className={classes.tab} />
      </Tabs>
    </Grid2>
  );
};

export default Header;
