import { makeStyles } from "@mui/styles";
import { colors } from "../../Config/theme";

const useStyles = makeStyles(() => ({
  main: {
    width: "15rem",
    boxShadow: colors.shadow,
    height: "15rem",
  },
}));
export default useStyles;
