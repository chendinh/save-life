import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
//import IconButton from "@material-ui/core/IconButton";
// import OrIcon from "@material-ui/icons/UnfoldMore";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import IconButton from "@material-ui/core/IconButton";

// import local file
import loginStyle from "./LoginStyle.jsx";
import Navbar from "./sections/Navbar.jsx";

class LoginPresentation extends Component {
  render() {
    let { classes, fieldErrors, isLogined } = this.props;
    const Title = () => (
      <div id="status" className={classes.Title}>
        Welcome
      </div>
    )

    const Label = props => (
      <label className={classes.Label}>
        {props.content}
      </label>
    )

    const CustomButton = props => (
      <Button 
        className={classes.CustomButton}
        onClick={props.onClick}
        onSubmit={props.onClick}
      >
        {props.content}
      </Button>
    )

    return (
      <Fragment>
        <Navbar/>
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
            <p style={{ color: 'white' }}>
              {
                fieldErrors.usernameError 
                  ? fieldErrors.usernameError
                  : fieldErrors.passwordError 
                    ? fieldErrors.passwordError : null
                    // : isLogined === false 
                    //   ? "Username/Password is invalid"
                      // : ""
              }
            </p>
            <form>
              <div className={classes.InputBox}>
                <Label content="Username"/>
                <input
                  name="username"
                  type="text"
                  placeholder=""
                  value={this.props.fields.username}
                  onChange={this.props.onChange}
                  className={classes.Input}
                />
              </div>
              <div className={classes.InputBox}>
                <Label content="Password"/>
                <input
                  name="password"
                  type="password"
                  onChange={this.props.onChange}
                  value={this.props.fields.password}
                  placeholder=""
                  className={classes.Input}
                /> 
              </div>
            </form>
            <CustomButton content="Login"
              onClick={this.props.onSubmit}
            />
            {/* <OrIcon className={classes.IconOr}/> */}
            {/* <div style={{ display: "flex", alignItems: "center" }}>
              <div 
                style={{ marginLeft: "auto", marginRight: "auto", display: "block" }} 
                className="fb-login-button" 
                data-width="300px" 
                data-max-rows="10" 
                data-size="large" 
                data-button-type="login_with" 
                data-show-faces="true" 
                data-auto-logout-link="true" 
                data-use-continue-as="true">
              </div>
            </div> */}
            {/* <CustomButton content="Login With Facebook"/> */}
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