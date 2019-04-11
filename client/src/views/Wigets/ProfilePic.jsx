import React from "react";

//@material-ui components
import { withStyles }   from '@material-ui/core/styles';
import {AccountCircle}  from '@material-ui/icons';
import GridContainer    from "components/Grid/GridContainer.jsx";
import Button            from "@material-ui/core/Button"
//Profile pic is load from file and then preview through a pre determine field using local url
class ProfilePic extends React.Component {
  render() {
    const {classes} = this.props
    //input tag will be hidden and awaiting reference
    //reference will be provide by button this.upload.click()
    return (
      <div id="profile img">
        <GridContainer justify="center">
          {(this.props.imageurl && !this.props.avatarerror) ?
            <div id="image preview">
              <Button onClick={(e) => this.upload.click()} style={{height: 80, width: 80}}>
                <img alt="placeholder" style={{borderRadius: "50%", height: 80, width: 80}} src={this.props.imageurl} />
              </Button>
            </div> :
            <Button onClick={(e) => this.upload.click()} >
              <AccountCircle style={{height: 80, width: 80}} color="inherit" size="large" className={classes.ImageIcon}/>
            </Button>
          }
        </GridContainer>
        <input
          id = "avatar input"
          ref={(ref) => this.upload = ref}
          type="file"
          style={{ display: 'none' }}
          onChange={this.props.onFileSelect}
        />
        <GridContainer justify="center">
          <div> {this.props.avatarerror ? this.props.avatarerror : "Avatar"} </div>
        </GridContainer>
      </div>
    );
  };
};
const styles = theme => ({
  // style for default design
});
export default withStyles(styles)(ProfilePic);
