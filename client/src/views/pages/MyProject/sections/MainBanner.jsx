import React, {Component, Fragment} from 'react';
import IconButton from "@material-ui/core/IconButton";

//** Import file */
import "../css/MainBannerMyProject.css";

class MainBanner extends Component {
  render() {
    const { categoryName } = this.props;
    return (
      <Fragment>
        <div className="Discover-MainBanner-Container">
          <div className="Discover-text-box">
            <h1 className="Discover-header-primary">
              <span className="Discover-header-primary-main">
                My Projects
              </span>
              {/* <span className="Discover-header-primary-main"></span> */}
              {/* <span className="header-primary-sub">
                Change the world with your donation, Let's Join Hands for Charity 
              </span> */}
      
            </h1>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default (MainBanner);