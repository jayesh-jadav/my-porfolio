import { makeStyles } from "@mui/styles";
import { colors } from "../../Config/theme";

const useStyles = makeStyles(() => ({
  container: {
    height: "90vh",
    display: "flex !important",
    alignItems: "center",
    flexWrap: "nowrap !important",
    gap: "100px !important",
    padding: "0px 7rem 0px 7rem",
  },
  borderWrapper: {
    display: "inline-block",
    position: "relative",
    padding: 5,
    borderRadius: "50%",
    zIndex: 1,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "50%",
      borderBottom: "10px dashed red",
      borderTop: "10px dashed green",
      backgroundSize: "300% 300%",
      transform: "rotate(0deg)",
      animation: "$rotateBorder 5s linear 2s infinite",
      zIndex: -1,
    },
  },
  img: {
    borderRadius: "50%",
    height: "400px !important", // Adjust the size as per your requirement
    width: "400px !important",
    display: "block",
  },
  "@keyframes rotateBorder": {
    "0%": {
      transform: "rotate(0deg)", // Initial state
    },
    "100%": {
      transform: "rotate(360deg)", // Final state for full rotation
    },
  },

  socialContainer: {
    display: "flex",
    gap: 30,
    marginTop: 20,
  },
  iconButton: {
    display: "flex",
    alignItems: "center !important",
    height: 40,
    width: 40,
    borderRadius: "50px",
    color: colors.white,
    transition: "all 0.3s ease-out !important",
    boxShadow: colors.chipShadow,
    overflow: "hidden",
    "&:hover": {
      width: "200px !important",
      "& $socialText": {
        display: "block",
      },
      // "&:nth-child(1) $socialIcon": {
      //   backgroundColor: "red !important",
      // },
      // "&:nth-child(2) $socialIcon": {
      //   backgroundColor: colors,
      // },
      // "&:nth-child(3) $socialIcon": {
      //   backgroundColor: "blue",
      // },
    },
  },
  socialIcon: {
    transition: "linear 0.3s !important",
    float: "left",
    margin: 5,
    borderRadius: 50,
    padding: 5,
    height: "30px !important",
    width: "30px !important",
    alignItem: "center",
  },
  socialText: {
    display: "none",
  },
}));

export default useStyles;
