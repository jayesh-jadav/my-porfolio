import {
  Box,
  Divider,
  Drawer,
  Grid2,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { color } from "../../Utils/theme";
import { useDispatch, useSelector } from "react-redux";
import auth from "../../Redux/Reducer/auth/action";
import { SettingsOutlined } from "@mui/icons-material";

const Header = () => {
  const { setTheme } = auth;
  const { newTheme } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleChange = (newValue, index) => {
    setValue(index);
  };

  // useEffect(() => {
  //   dispatch(setTheme(color[0]));
  // }, [color]);
  return (
    <Grid2
      container
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 20,
        paddingRight: 30,
        paddingLeft: 30,
      }}
    >
      <Typography
        style={{
          color: "transparent",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage: newTheme.colors.gradient,
          fontSize: 30,
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        Jayesh Jadav
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Tabs with custom gradient hover and active styles"
        selectionFollowsFocus
      >
        <Tab
          label="Home"
          sx={{
            // Smooth transition
            transition: "background-color 10s ease",
            "&:hover": {
              transition: "background-color 2s ease",
              background: color.gradient,
              color: color.text,
            },
            "&.Mui-selected": {
              background: color.gradient,
              color: color.text,
            },
          }}
        />
        <Tab
          label="About"
          sx={{
            "&:hover": {
              background: color.gradient,
              color: color.text,
              transition: "background-color 0.3s ease, color 0.3s ease",
            },
            "&.Mui-selected": {
              background: color.gradient,
              color: color.text,
            },
          }}
        />
        <Tab
          label="Contact"
          sx={{
            transition: "background-color 0.3s ease, color 0.3s ease",
            "&:hover": {
              background: color.gradient,
              color: color.text,
            },
            "&.Mui-selected": {
              background: color.gradient,
              color: color.text,
            },
          }}
        />
      </Tabs>
      <IconButton
        style={{ height: 30, width: 30 }}
        onClick={() => setOpen(true)}
      >
        <SettingsOutlined />
      </IconButton>

      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <Box style={{ minWidth: 250, padding: 20 }}>
          <Typography variant="h5">Setting</Typography>
          <Divider />
          <Grid2 style={{ marginTop: 20 }}>
            <Typography>Mode</Typography>
          </Grid2>
        </Box>
      </Drawer>
    </Grid2>
  );
};
export default Header;
