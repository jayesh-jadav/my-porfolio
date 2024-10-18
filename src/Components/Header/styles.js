import { makeStyles } from "@mui/styles";
import { colors } from "../../Config/theme";

const useStyles = makeStyles(() => ({
  tab: {
    position: "relative",
    fontSize: "1.1em",
    color: "#333 !important",
    textDecoration: "none",
    padding: "6px 20px",
    transition: "color 0.5s ease",
    zIndex: 1,
    "&:hover": {
      color: colors.secondary + "!important",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: -5,
      // left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      borderBottom: `2px solid ${colors.secondary}`,
      borderRadius: "15px",
      transform: "scale(0) translateY(50px)",
      opacity: 0,
      transition: "transform 0.5s ease, opacity 0.5s ease",
    },
    "&:hover::after": {
      transform: "scale(1) translateY(0)",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: colors.secondary + " !important", // Highlight active tab with secondary color
      "&::after": {
        transform: "scale(1) translateY(0)", // Keep the bottom line visible
        opacity: 1,
      },
    },
  },
  indicator: {
    display: "none", // Disable the default indicator of Tabs component
  },
}));

export default useStyles;
