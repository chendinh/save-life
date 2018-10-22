import React      from "react";
// @material-ui/core components
//import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid       from "@material-ui/core/Grid";

class ItemBox extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
      <Grid container justify="center">
        <Grid item xs />
        <Grid item xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}>
            <div className={classes.footerTitle}>
              ItemBox
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
    height: "250px",
    backgroundColor: "orange",
  },
  footerTitle: {
    paddingTop: "70px",
    textAlign: "center",
  }
  
});

export default withStyles(styles)(ItemBox);

