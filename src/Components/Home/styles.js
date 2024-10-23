import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    height: "90vh",
    display: "flex !important",
    alignItems: "center",
    flexWrap: "nowrap !important",
    gap: "50px !important",
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
    height: "400px", // Adjust the size as per your requirement
    width: "400px",
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
}));

export default useStyles;
