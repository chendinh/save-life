import React          from "react";
// @material-ui/core components
//import classNames from "classnames";
import withStyles     from "@material-ui/core/styles/withStyles";
import Grid           from "@material-ui/core/Grid";
//** import File */
import LoginLogoutBar from "./LoginLogoutBar";
import Logo           from "./Logo";
import Menu           from "./Menu";

class FooterSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
      <Grid container justify="center">
        <Grid item xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}>
            <div className={classes.footerTitle}>
              <LoginLogoutBar/>
              <Logo/>
              <Menu history={this.props.history}/>
            </div>
        </Grid>
      </Grid>
    </div>
    )
  }
}
const styles = theme => ({
  // for Desktop and Mobile
  section: {
    marginBottom: "8px",
    width: "100%",
    height: "250px",
  },
  footerTitle: {
    textAlign: "center",
  }
  
});

export default withStyles(styles)(FooterSection);

