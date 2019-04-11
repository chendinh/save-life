import React, {Component,Fragment} from 'react';
//** Import file */
import Navbar from "./sections/Navbar.jsx";
import MainBanner from "./sections/MainBanner.jsx";
import FeatureWorkSection from "./sections/FeatureWorkSection.jsx";
import TeamSection from "./sections/TeamSection.jsx";
import ContactSection from "./sections/ContactSection.jsx"
import "./HomeStyle.css"

class HomePresentation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <MainBanner/>
        <FeatureWorkSection/>
        <TeamSection/>
        {/* <ContactSection/> */}
      </Fragment>
    );
  }
}

export default HomePresentation;
