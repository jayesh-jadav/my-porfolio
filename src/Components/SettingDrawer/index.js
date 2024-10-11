import {
  Box,
  Divider,
  Drawer,
  FormControlLabel,
  Grid2,
  Switch,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { color } from "../../Utils/theme";
import ThemeCard from "../ThemeCard";

const SettingDrawer = (props) => {
  const { open, handleClick = () => null } = props;
  const [checked, setChecked] = useState(null);

  // useEffect(()=>{
  //   setChecked
  // },[newTheme])

  const handleChange = (item, index) => {
    setChecked(index);
  };
  return (
    <Drawer anchor={"right"} open={open} onClose={() => handleClick(false)}>
      <Box style={{ width: 250, padding: 20 }}>
        <Typography variant="h5">Setting</Typography>
        <Divider />
        <Grid2 style={{ marginTop: 20 }}>
          <Typography>Mode</Typography>
        </Grid2>
        <Grid2>
          {color?.map((item, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Switch
                    checked={checked === index}
                    onChange={() => handleChange(item, index)}
                  />
                }
                label={item?.name}
              />
            );
          })}
        </Grid2>
        <ThemeCard />
      </Box>
    </Drawer>
  );
};

export default SettingDrawer;
