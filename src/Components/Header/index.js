import {
  Grid2,
  Tab,
  Tabs,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { Menu } from "@mui/icons-material"; // Import Menu icon for the drawer toggle
import useStyles from "./styles";
import { colors } from "../../Config/theme";

const Header = () => {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for Drawer open/close
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setDrawerOpen(false); // Close the drawer when a tab is clicked
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
        padding: 30,
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
        }}
      >
        Jayesh Jadav
      </Typography>

      {/* Icon Button for Mobile Menu */}
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ display: { xs: "block", md: "none" } }} // Show only on mobile
      >
        <Menu />
      </IconButton>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
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
