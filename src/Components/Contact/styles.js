import { makeStyles } from "@mui/styles";
import { colors } from "../../Config/theme";

const useStyles = makeStyles(() => ({
  container: {
    padding: "50px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
  },
  mainHeader: {
    textAlign: "center",
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
