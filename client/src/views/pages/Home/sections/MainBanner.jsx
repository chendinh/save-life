import React, {Component, Fragment} from 'react';
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
//** Import file */
import "../css/MainBanner.css";
class MainBanner extends Component {
  render() {
    return (
      <Fragment>
        <div className="MainBanner-Container">
          <div className="text-box">
            <h1 className="header-primary">
              <span className="header-primary-main">WE CAN MAKE</span>
              <span className="header-primary-main">OUR LIVES BETTER</span>
              <span className="header-primary-sub">
                Change the world with your donation, Let's Join Hands for Charity 
              </span>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                  <Button 
                    style={{ 
                      color: 'white', 
                      fontWeight: 500, 
                      fontFamily: 'sans-serif',
                      padding: '5px 10px',
                      marginTop: '10px',
                      backgroundColor: 'saddlebrown',
                      borderRadius: '5px'
                    }}
                  >
                    SIGN UP NOW
                  </Button>
                </Link>
            </h1>
          </div>
          <IconButton
            onClick={ () =>{
              
            }}
          />
        </div>
      </Fragment>
    );
  }
}

export default (MainBanner);