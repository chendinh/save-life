import React      from "react";

// @material-ui/core components
//import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid       from "@material-ui/core/Grid";
import Button     from "@material-ui/core/Button";
import MenuIcon   from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

class Menu extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
      <Grid container justify="center">
      <Grid item xs={5} md/>
        <Grid item xs={2}
              sm={2} 
              md={12}
              lg={12}
              xl={12}>
            <div className={classes.menuDesktop}>
              <Button href="/brows"     className={classes.button}>BROWS</Button>
              <Button href="/eyes"      className={classes.button}>EYES</Button>
              <Button href="/face"      className={classes.button}>FACE</Button>
              <Button href="/skincare"  className={classes.button}>SKIN CARE</Button>
              <Button href="/lips"      className={classes.button}>LIPS</Button>
              <Button href="/sale"      className={classes.button} color="secondary" >SALE</Button>
              <Button href="/blog"      className={classes.button}>BLOG</Button>
            </div>
        </Grid>
        <Grid item xs />
      </Grid>
      <div className={classes.menuMobile}>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
      </div>
    </div>
    )
  }
}
const styles = theme => ({
  // for Desktop and Mobile
  section: {
    width: "100%",
    height: "50px",
  },
  menuDesktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    }
  },
  box3: {
    direction: "column",
    marginRight: "5px",
    flexBasis: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },

  menuMobile: {
    marginTop: "30px",
    fontFamily: "sans-serif",
    backgroundAttachment: "fixed",
    magrinLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("md")]: {
      display: "none",
    }
  },
  iconMenu1: {
    width: "30px",
    height: "4px",
    backgroundColor: "grey",
    marginTop: "50px",
    marginBottom: "2px",
  },
  iconMenu2: {
    width: "30px",
    height: "4px",
    backgroundColor: "grey",
    margin: "2px 0",
  },
  iconMenu3: {
    width: "30px",
    height: "4px",
    backgroundColor: "grey",
    margin: "2px 0",
  },
  button: {
    fontSize: "18px",
    fontWeight: "normal",
    fontFamily: "Helvetica Neue",
    marginTop: "15px",
    textAlign: "center",
    margin: "8px",
  }
  
});

export default withStyles(styles)(Menu);

  /* <div className={classes.box3}>  
          <div className={classes.iconMenu1}></div>
        </div>
        <div className={classes.box3}>  
          <div className={classes.iconMenu2}></div>
        </div> 
        <div className={classes.box3}>  
          <div className={classes.iconMenu3}></div>
        </div>
      </div> */