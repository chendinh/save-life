import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import OrIcon from "@material-ui/icons/UnfoldMore";

// import local file
import loginStyle from "./LoginStyle.jsx";

class LoginPresentation extends Component {
  render() {
    let { classes } = this.props;

    const Title = () => (
      <div className={classes.Title}>
        Welcome to you !
      </div>
    )

    const Input = props => (
      <input 
        type={props.type}
        placeholder={props.placeholder}
        className={classes.Input}
      />
    )

    const Label = props => (
      <label className={classes.Label}>
        {props.content}
      </label>
    )

    const CustomButton = props => (
      <Button 
        className={classes.CustomButton}
      >
        {props.content}
      </Button>
    )

    return (
      <Fragment>
        {/* This is Background */}
        <div
          name='background'
          className={classes.pageHeader}
        >
          {/* This is Container */}
          <div
            name='Container-'
            className={classes.Container}
          >
            <Title/>
            <form>
              <div className={classes.InputBox}>
                <Label content="Username"/>
                <Input
                  type="text"
                  placeholder=""
                />
              </div>
              <div className={classes.InputBox}>
                <Label content="Password"/>
                <Input
                  type="password"
                  placeholder=""
                />  
              </div>
            </form>
            <CustomButton content="Login"/>
            <OrIcon className={classes.IconOr}/>
            <CustomButton content="Login With Facebook"/>
          </div>
        </div>
      </Fragment>
    );
  }
}

// xs={11} sm={11} md={5} lg={5} xl={5}
LoginPresentation.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(loginStyle)(LoginPresentation);