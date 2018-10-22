import React      from "react";
// @material-ui/core components
//import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid       from "@material-ui/core/Grid";

class FooterSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.footerbar}>
          <Grid container justify="center">
          <Grid item xs />
          <Grid item xs={10}
                sm={10}
                md={8}
                lg={8}
                xl={8}>
              <div className={classes.footerTitle}>
                Footer
              </div>
          </Grid>
          <Grid item xs />
        </Grid>
        </div>
    </div>
    )
  }
}
const styles = theme => ({
  // for Desktop and Mobile
  section: {
    width: "100%",
    height: "150px",
    backgroundColor: "#725951",
    marginTop: "40px",
  },
  footerbar: {
    paddingTop: "15px",
  },
  footerTitle: {
    paddingTop: "70px",
    textAlign: "center",
  }
  
});

export default withStyles(styles)(FooterSection);

