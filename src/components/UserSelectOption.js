import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "90%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const UserSelectOption = ({ inputName, inputArray }) => {
  const classes = useStyles();

  const [input, setInput] = React.useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <FormControl required className={classes.formControl}>
      <InputLabel id="demo-simple-select-required-label">
        {inputName}
      </InputLabel>
      <Select
        labelId="select-required-label"
        id="simple-select-required"
        value={input}
        onChange={
          handleChange}
        className={classes.selectEmpty}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {inputArray &&
          inputArray.map((input) => <MenuItem value={input}>{input}</MenuItem>)}
      </Select>
      <FormHelperText>
        Please select your {inputName.toLowerCase()}
      </FormHelperText>
    </FormControl>
  );
};

export default UserSelectOption;
