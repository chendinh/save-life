import React      from "react";
// @material-ui/core components
//import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

class Logo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.row}>
          <div className={classes.image}/>
        </div>
      </div>
    )
  }
}
const styles = theme => ({
  // for Desktop and Mobile
  section: {
    width: "100%",
    height: "180px",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
    }
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: "180px",
    height: "180px",
    backgroundImage: "url(" + require("../../assets/img/Logo180.jpg") + ")",  },
    backgroundSize: "contain",
    backgroundPosition: "center",
    marginLeft: "auto",
    marginRight: "auto",
  }
);

export default withStyles(styles)(Logo);

