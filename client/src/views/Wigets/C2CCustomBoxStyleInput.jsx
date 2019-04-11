import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// core components
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  bootstrapRoot: {
    padding: 0,
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    width: "calc(100% - 24px)",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  bootstrapFormLabel: {
    fontSize: 18
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class C2CCustomBoxStyleInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      error: false,
    };
  }

  onChange = (evt) => {
    const name = this.props.name;
    const value = evt.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;
  
    this.setState(() => ({
      value,
      error,
    }));

    if (this.props.onChange) this.props.onChange({ name, value, error });
  }

  render() {
    const type = this.props.type;
    const name = this.props.name;
    const value = this.props.value;
    const disabled = this.props.disabled;
    const onChange = this.onChange;

    const { classes } = this.props;

    if (!this.state.error) {
      return (
        <FormControl className={classes.formControl}>
          <TextField
            label={this.props.labelText}
            id={this.props.id}
            InputProps={{
              type,
              name,
              value,
              disabled,
              onChange,
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              },
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel,
            }}
          />
        </FormControl>
      );
    } else {
      return (
        <FormControl className={classes.formControl} error>
          <TextField
            label={this.props.labelText}
            id={this.props.id}
            InputProps={{
              type,
              name,
              value,
              disabled,
              onChange,
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              },
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel,
            }}
          />
          <FormHelperText id="name-error-text">{this.state.error}</FormHelperText>
        </FormControl>
      );
    }
  }
}

C2CCustomBoxStyleInput.propTypes = {
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  validate: PropTypes.func,
  endAdornment: PropTypes.object,
  fullWidth: PropTypes.bool,
}

export default withStyles(styles)(C2CCustomBoxStyleInput);
