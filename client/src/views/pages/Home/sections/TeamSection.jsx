import React, {Component, Fragment} from 'react';
import Avatar from '@material-ui/core/Avatar';
// import { Link } from 'react-router-dom';
// React-slick
import Slider from "react-slick";
import "../../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
//** Import file */
import TitleSection from "./TitleSection.jsx";
import "../css/TeamSection.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
//** Import avatar of team */
import BillGateAvatar from "../../../../assets/img/team/billgates.jpg";
import MarkAvatar from "../../../../assets/img/team/mark.jpg";
import ObamaAvatar from "../../../../assets/img/team/obama.jpg";
import TrumpAvatar from "../../../../assets/img/team/trump.jpg";
import facebookIcon from "../../../../assets/img/team/facebook.png";
import twitterIcon from "../../../../assets/img/team/twitter.png";
import skypeIcon from "../../../../assets/img/team/skype.png";
import linkedinIcon from "../../../../assets/img/team/linkedin.png";

class TeamSection extends Component {
  render() {
    AOS.init()

    const settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const ProfileBox = (props) => (
      <div 
        className="box-profile-item" 
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <Avatar
          alt="Adelle Charles"
          src={props.src}
          className={props.className}
          style={{ width: "120px", height: "120px" }}
        />
        <div className="title-name-surname">
          {props.contentName}
        </div>
        <div className="title-position">
          {props.contentPosition}
        </div>
        <div className="social-icon-container">
        {
          props.facebookHref ? 
            <a href={props.facebookHref} className="icon-social">
              <img src={facebookIcon} alt="" height="24" width="24"/>
            </a>
            : null
        }
        {
          props.twitterHref ? 
            <a href={props.twitterHref} className="icon-social">
              <img src={twitterIcon} alt="" height="24" width="24"/>
            </a>
            : null
        }
        {
          props.skypeHerf ? 
            <a href={props.skypeHerf} className="icon-social">
              <img src={skypeIcon} alt="" height="24" width="24"/>
            </a>
            : null
        }
                {
          props.linkedinHref ? 
            <a href={props.linkedinHref} className="icon-social">
              <img src={linkedinIcon} alt="" height="24" width="24"/>
            </a>
            : null
        }
        </div>
      </div>
    )
    const GridProfiles = () => (
      <div className="grid-profile-container">
        <ProfileBox 
          src={BillGateAvatar} 
          className="profile-avatar"
          contentName="Bill Gates"
          contentPosition="Lead Developer"
          facebookHref="https://www.facebook.com/BillGates/"
          twitterHref="https://www.facebook.com/BillGates/"
        />
        <ProfileBox 
          src={MarkAvatar} 
          className="profile-avatar"
          contentName="Mark Zuckerberg"
          contentPosition="Lead Designer"
          facebookHref="https://www.facebook.com/zuck"
          skypeHerf="https://www.facebook.com/zuck"
          linkedinHref="https://www.facebook.com/zuck"
        />
        <ProfileBox 
          src={ObamaAvatar} 
          className="profile-avatar"
          contentName="Barack Obama"
          contentPosition="Marketing Director"
          skypeHerf="https://www.facebook.com/barackobama"
          twitterHref="https://www.facebook.com/barackobama"
        />
        <ProfileBox 
          src={TrumpAvatar} 
          className="profile-avatar"
          contentName="Donald Trump"
          contentPosition="Business Director"
          skypeHerf="https://www.facebook.com/DonaldTrump/"
          twitterHref="https://www.facebook.com/DonaldTrump/"
        />
      </div>
    )
    const GridMobileProfiles = () => (
      <div className="grid-mobile-profiles-container">
        <Slider {...settings}>
        <ProfileBox 
          src={BillGateAvatar} 
          className="profile-avatar"
          contentName="Bill Gates"
          contentPosition="Lead Developer"
          facebookHref="https://www.facebook.com/"
          twitterHref="https://www.facebook.com/"
        />
        <ProfileBox 
          src={MarkAvatar} 
          className="profile-avatar"
          contentName="Mark Zuckerberg"
          contentPosition="Lead Designer"
          facebookHref="https://www.facebook.com/"
          skypeHerf="https://www.facebook.com/"
          linkedinHref="https://www.facebook.com/"
        />
        <ProfileBox 
          src={ObamaAvatar} 
          className="profile-avatar"
          contentName="Barack Obama"
          contentPosition="Marketing Director"
          skypeHerf="https://www.facebook.com/"
          twitterHref="https://www.facebook.com/"
        />
        <ProfileBox 
          src={TrumpAvatar} 
          className="profile-avatar"
          contentName="Donald Trump"
          contentPosition="Business Director"
          skypeHerf="https://www.facebook.com/"
          twitterHref="https://www.facebook.com/"
        />
        </Slider>
      </div>
    )
    return (
      <Fragment>
        <div className="TeamSection-Container">
          <TitleSection kind="team"/>
          <GridProfiles/>
          <GridMobileProfiles/>
        </div>
      </Fragment>
    );
  }
}

export default TeamSection;