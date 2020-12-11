import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  availableSizes: {
    display: "flex",
    justifyContents: "space-around",
  },
  chipItem: {
    marginRight: "1px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "98%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;