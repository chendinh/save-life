import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});

class MenuListComposition extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div>
          <Button
            style={{ color: 'saddlebrown', fontSize: '15px', fontWeight: 500, fontFamily: 'sans-serif' }} 
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            <IconButton
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Button>
          <Popper style={{ zIndex:2 }} open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  zIndex:2,     
                }}
              >
                <Paper style={{ zIndex:2 }}>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    {
                      localStorage.getItem("userRole") === "ADMIN"
                        ? 
                        <MenuList>
                          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                            <MenuItem 
                              style={{ color: 'saddlebrown', fontSize: '15px'}} 
                              onClick={this.handleClose}>Dashboard  
                            </MenuItem>
                          </Link>
                          <Link to="/login" style={{ textDecoration: 'none' }}>
                            <MenuItem 
                              style={{ color: 'saddlebrown', fontSize: '15px'}} 
                              onClick={() => localStorage.clear()}>Log out 
                            </MenuItem>
                          </Link>
                        </MenuList>
                        : 
                        <MenuList>
                          <Link to="/profile" style={{ textDecoration: 'none' }}>
                            <MenuItem 
                              style={{ color: 'saddlebrown', fontSize: '15px'}} 
                              onClick={this.handleClose}>Profile  
                            </MenuItem>
                          </Link>
                          <Link to="/profile" style={{ textDecoration: 'none' }}>
                            <MenuItem 
                              style={{ color: 'saddlebrown', fontSize: '15px'}} 
                              onClick={this.handleClose}>My Project 
                            </MenuItem>
                          </Link>
                          <Link to="/login" style={{ textDecoration: 'none' }}>
                            <MenuItem 
                              style={{ color: 'saddlebrown', fontSize: '15px'}} 
                              onClick={() => localStorage.clear()}>Log out 
                            </MenuItem>
                          </Link>
                        </MenuList>
                    }
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuListComposition);
