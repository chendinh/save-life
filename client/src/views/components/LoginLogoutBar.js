import React      from "react";
// @material-ui/core components
//import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid       from "@material-ui/core/Grid";
import Button     from "@material-ui/core/Button";

class LoginLogoutBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
      <Grid container justify="center">
      <Grid item xs
              sm={8}
              md={9}
              lg={8}
              xl={8}/>
        <Grid item xs={8}
              sm={4}
              md={3}
              lg={4}
              xl={4}>
            <div className={classes.LoginTitle}>
              <Button>
                Login
              </Button>
              <Button>
                Logout
              </Button>
            </div>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
    )
  }
}
const styles = theme => ({
  // for Desktop and Mobile
  section: {
    width: "100%",
    height: "40px",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "pink",
    }
  },
  LoginTitle: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      color: "white"
    }
  }
  
});

export default withStyles(styles)(LoginLogoutBar);
