import React from "react";

//@material-ui components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "@material-ui/core/Card"
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { withStyles } from "@material-ui/core/styles";
import loginPageStyle from "./loginPageStyle.jsx";
import C2CCustomInput from "views/Wigets/C2CCustomInput.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import backgroundImage from "assets/img/bg7.jpg";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import C2CButton from "views/Wigets/C2CButton.jsx";
import Button from "@material-ui/core/Button";

//const styles = theme => ({});

class Login1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    };
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + backgroundImage + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        {/*After background is set, use the style porived by mateiral ui to create a card containing login props*/}
        <div className={classes.container}>
          <GridContainer justify="center" style={{ margin: "0" }}>
            <GridItem xs={12} sm={12} md={5} lg={5} xl={5}>
              <Card>
                <form>
                  {/*Start card with logo import from local path*/}
                  <CardHeader>
                    <GridContainer justify="center">
                      <div
                        //src={"assets/img/logo-header.png"}
                        alt="logo placeholder"
                        style={{ color: "black", marginTop: "20px" }}
                      >WELCOME</div>
                    </GridContainer>
                  </CardHeader>
                  <CardBody>
                    <C2CCustomInput
                      labelText="username"
                      id="name"
                      type="text"
                      name="username"
                      value={this.props.fields.username}
                      onChange={this.props.onChange}
                      validate={val => (val ? false : "Username is required")}
                    />
                    {/*password field is adorned with a show password button that
                      would set state of input between normal text and password type,
                      all code base on  material ui example plus customed login page written
                      by us*/}
                    <C2CCustomInput
                      name="password"
                      labelText="password"
                      type={this.state.showPassword ? "text" : "password"}
                      value={this.props.fields.password}
                      onChange={this.props.onChange}
                      validate={val => (val ? false : "Password is required")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                          >
                            {this.state.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <br />
                    {/*the disabled boolean is controlled
                      by the validate function written in container*/}
                    <C2CButton
                      fullWidth
                      variant="contained"
                      disabled={!this.props.onvalidate()}
                      onClick={this.props.onSubmit}
                    >
                      Get Start
                    </C2CButton>
                    <br />
                    <br />
                    <GridContainer justify="center">
                      <a href="/login6" style={{ color: "black", textDecoration: "underline" }}>
                        You dont have a Account ?
                      </a>
                    </GridContainer>
                    <br />
                  </CardBody>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(Login1);
