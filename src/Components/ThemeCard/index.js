import { Grid2, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { colors } from "../../Config/theme";

const ThemeCard = (props) => {
  const { title = "Title" } = props;
  const { newTheme } = useSelector((state) => state.auth);

  const styles = useStyles({ newTheme });
  return (
    <Grid2 className={styles.main} style={{ backgroundColor: colors?.primary }}>
      <Typography>{title}</Typography>
    </Grid2>
  );
};

export default ThemeCard;
