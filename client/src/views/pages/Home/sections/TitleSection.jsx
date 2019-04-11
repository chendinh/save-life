import React, {Fragment} from 'react';
//** Import file */
import "../css/TitleSection.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TitleSection = (props) => {
  AOS.init()

  const Content  = () => {
    if (props.kind === "feature work") {
      return (
        <Fragment>
          <div 
            className="text-box-title-section"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            >
            <h1 className="title-primary">
              <span className="title-primary-main">FEATURE WORK</span>
              <span className="title-primary-sub">
                Here you can find some our lastest works, 
                to see the details of these works
                just lick the thumbnails below
              </span>
            </h1>
          </div>
        </Fragment>
      )
    } 
    else if (props.kind === "team") {
      return (
        <Fragment>
          <div 
            className="text-box-title-section"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h1 className="title-primary">
              <span className="title-primary-main">TEAM</span>
              <span className="title-primary-sub">
                We are a hard working group, who's aim to listen your problems
                and come up with the best solution possible. 
                We follow the trend on the web to create custom talierd niches websites.
              </span>
            </h1>
          </div>
        </Fragment>
      )
    }
    else if (props.kind === "contact") {
      return (
        <Fragment>
          <div 
            className="text-box-title-section"
            style={{ height: "60px" }}
          >
            <h1 className="title-primary">
              <span className="title-primary-main">CONTACT</span>
            </h1>
          </div>
        </Fragment>
      )
    }
    else {
      return (
        <Fragment>
          <div 
            className="text-box-title-section"
            style={{ height: "60px" }}
          >
            <h1 className="title-primary">
              <span className="title-primary-main">{props.kind}</span>
            </h1>
          </div>
        </Fragment>
      )    }
  }
  return (
    <Content/>
  );
}
    
export default TitleSection;