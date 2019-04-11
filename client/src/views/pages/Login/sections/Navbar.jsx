import React, {Component, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
//** Import file */
import "../css/Navbar.css";
import MenuListButton from './MenuListComposition';
class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className="Navbar-Container">
          <Link 
            className="Logo" to="/" style={{ textDecoration: 'none' }}>
          </Link>
          <div className="Menu">
            <span className="Word">
              <Link to="/discover" style={{ textDecoration: 'none' }}>
                <Button 
                  style={{ 
                    color: 'saddlebrown', 
                    fontWeight: 500, 
                    fontFamily: 'sans-serif',
                    padding: '5px 10px'
                  }}
                >
                  Discover
                </Button>
              </Link>
            </span>
            <span className="Word">
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <Button 
                  style={{ 
                    color: 'saddlebrown', 
                    fontWeight: 500, 
                    fontFamily: 'sans-serif',
                    padding: '5px 10px'
                  }}
                >
                  ABOUT
                </Button>
              </Link>
            </span>
            <span className="Word">
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button 
                  style={{ 
                    color: 'saddlebrown', 
                    fontWeight: 500, 
                    fontFamily: 'sans-serif',
                    padding: '5px 10px'
                  }}
                >
                  CONTACT
                </Button>
              </Link>
            </span>
            <span className="Word">
            <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button 
                  style={{ 
                    color: 'white', 
                    fontWeight: 500, 
                    fontFamily: 'sans-serif',
                    padding: '5px 10px',
                    backgroundColor: 'saddlebrown',
                    borderRadius: '5px'
                  }}
                >
                  SIGN UP
                </Button>
              </Link>
            </span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Navbar;