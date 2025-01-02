import { makeStyles } from "@mui/styles";
import { colors } from "../../Config/theme";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 50,
    "@media (max-width:900px)": {
      flexWrap: "wrap",
      alignItems: "center",
      flexDirection: "column-reverse",
      textAlign: "center",
    },
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
      boxShadow: `0px 0px 30px 10px ${colors.primary}`,
      animation: "$rotateShadowEffect 5s linear infinite",
      zIndex: -1,
    },
  },
  img: {
    borderRadius: "50%",
    minHeight: "400px", // Adjust the size as per your requirement
    minWidth: "400px",
    display: "block",
    "@media (max-width:900px)": {
      minHeight: "40vw", // Adjust the size as per your requirement
      minWidth: "40vw",
    },
  },
  "@keyframes rotateShadowEffect": {
    "0%": {
      boxShadow: `10px 0px 30px 10px ${colors.primary}`,
    },
    "25%": {
      boxShadow: `0px 10px 30px 10px ${colors.primary}`,
    },
    "50%": {
      boxShadow: `-10px 0px 30px 10px ${colors.primary}`,
    },
    "75%": {
      boxShadow: `0px -10px 30px 10px ${colors.primary}`,
    },
    "100%": {
      boxShadow: `10px 0px 30px 10px ${colors.primary}`,
    },
  },

  socialContainer: {
    display: "flex",
    gap: 30,
    marginTop: 20,
    "@media (max-width:900px)": {
      justifyContent: "center",
      gap: 10,
    },
  },
  iconButton: {
    display: "flex",
    alignItems: "center !important",
    height: 40,
    width: 40,
    borderRadius: "50px",
    color: colors.white,
    fontWeight: 700,
    backgroundColor: colors.primary,
    transition: "all 0.5s ease-out !important",
    boxShadow: colors.chipShadow,
    overflow: "hidden",
    "&:hover": {
      width: "150px !important",
      "& $socialText": {
        display: "block",
        fontSize: 14,
      },
    },
    "@media (hover: none)": {
      "&:hover": {
        width: "40px !important", // Keep original size
        "& $socialText": {
          display: "none", // Hide text on touch devices
        },
      },
    },
  },
  socialIcon: {
    transition: "linear 0.5s !important",
    float: "left",
    margin: 5,
    borderRadius: 50,
    padding: 5,
    height: "30px !important",
    width: "30px !important",
    alignItem: "center",
    color: colors.white,
    // backgroundColor: `${colors.white}`,
  },
  socialText: {
    display: "none",
  },
}));

export default useStyles;
