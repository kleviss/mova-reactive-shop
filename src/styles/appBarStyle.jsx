import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBarLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80px",
  },
}));

export default useStyles;