import { makeStyles } from "@mui/styles";
import { colors } from "../../Config/theme";

const useStyles = makeStyles(() => ({
  container: {
    margin: "50px 0px 0px",
    padding: "50px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
  },
  section: {
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
}));

export default useStyles;
