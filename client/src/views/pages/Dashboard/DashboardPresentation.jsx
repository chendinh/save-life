import React, {Component, Fragment} from 'react';
import Navbar from "./sections/Navbar.jsx";
import MainBanner from './sections/MainBanner.jsx';
import NavPill from './sections/NavPill.jsx';

class DashboardPresentation extends Component {
  render() {
    return(
      <Fragment>
        <Navbar/>
        <MainBanner/>
        <NavPill/>
      </Fragment>
    )
  }
}
export default DashboardPresentation;
