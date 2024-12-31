import { makeStyles } from "@mui/styles";
import { colors } from "../../Config/theme";

const useStyles = makeStyles(() => ({
  socialContainer: {
    display: "flex",
    gap: 20,
  },
  iconButton: {
    display: "flex",
    alignItems: "center !important",
    height: 40,
    width: 40,
    borderRadius: "50px",
    backgroundColor: colors.white,
    color: colors.primary,
    fontWeight: 700,
    transition: "all 0.5s ease-out !important",
    overflow: "hidden",
    "&:hover": {
      width: "150px !important",
      "& $socialText": {
        display: "block",
        padding: 5,
      },
    },
  },
  socialIcon: {
    transition: "linear 0.5s !important",
    float: "left",
    margin: 5,
    padding: 2,
    height: "30px !important",
    width: "30px !important",
  },
  socialText: {
    display: "none",
  },
  arrow: {
    transition: "0.5s",
    height: 50,
    width: 50,
    backgroundColor: `${colors.white} !important`,
    color: `${colors.black} !important`,
    "&:hover": {
      backgroundColor: `${colors.hoverColor} !important`,
      color: `${colors.white} !important`,
    },
  },
}));

export default useStyles;
