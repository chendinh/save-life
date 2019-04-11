import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";

class C2CCustomInput extends React.Component {
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
    const endAdornment = this.props.endAdornment;

    if (this.state.error) {
      return (
        <CustomInput
          error
          labelText={this.state.error}
          id={this.props.id}
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type,
            name,
            value,
            disabled,
            onChange,
            endAdornment,
          }}
        />
      );
    } else {
      return (
        <CustomInput
          labelText={this.props.labelText}
          id={this.props.id}
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            type,
            name,
            value,
            disabled,
            onChange,
            endAdornment,
            disableUnderline: true,
          }}
        />
      );
    }
  }
}

C2CCustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  validate: PropTypes.func,
  endAdornment: PropTypes.object,
}

export default C2CCustomInput;
