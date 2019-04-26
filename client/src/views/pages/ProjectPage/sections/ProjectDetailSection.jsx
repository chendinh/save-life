import React, {Component, Fragment} from 'react';
import '../css/ProjectDetailSection.css';
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import _ from "lodash";
import NavPill from './NavPill.jsx';
import Button from "components/CustomButtons/Button.jsx";
import DonationInputSection from "./DonationInputSection.jsx";

class ProjectDetailSection extends Component {
  render() {
    const { projectInfo, DonateNow, handleDonateTrue, handleDonateFalse } = this.props;

    console.log(_.get(projectInfo, 'images'))
    const Title = () => (
        <div className="ProjectDeatail-title-container">
          {_.get(projectInfo, 'title')}
        </div>
    )
    const Information = () => (
      <div className="ProjectDeatail-information-container">
        {/* main picture of project  */}
        <img
          className="ProjectDeatail-information-grid-item-left"
          src={
            _.head(_.get(projectInfo, 'images')) 
              ? _.head(_.get(projectInfo, 'images')) 
              : "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          }
          alt="Card-img-cap"
        />
        {/* LinearProgress */}
        <div className="ProjectDeatail-information-grid-item-right">
          <CustomLinearProgress
            variant="determinate"
            color="warning"
            value={_.get(projectInfo, 'process')}
            style={{ marginBottom: "0", borderRadius: "90px 90px 0 0" }}
          />
          <CustomLinearProgress
            variant="determinate"
            color="warning"
            value={_.get(projectInfo, 'process')}
            style={{ marginBottom: "0" }}
          />
          <CustomLinearProgress
            variant="determinate"
            color="warning"
            value={_.get(projectInfo, 'process')}
            style={{ marginBottom: "0" }}
          />
          <CustomLinearProgress
            variant="determinate"
            color="warning"
            value={_.get(projectInfo, 'process')}
            style={{ borderRadius: "0 0 90px 90px" }}
          />
          {/* funded - doantion count - still missing */}
          <div className="ProjectDeatail-information-grid-item-right-numbers-Container">
            <div 
              className="ProjectDeatail-information-grid-item-right-numbers-Item"
              style={{ textAlign: "left" }}
            >
              <span style={{ fontWeight: "800" }}>{_.get(projectInfo, 'process')}%</span>
              <br/>
              funded      
            </div>
            <div 
              className="ProjectDeatail-information-grid-item-right-numbers-Item"
              style={{ 
                textAlign: "center", 
                borderLeft: "2px solid black",
                borderRight: "2px solid black"
              }}
            >
              <span style={{ fontWeight: "800" }}>{_.get(projectInfo, 'donationsCount')}</span>
              <br/>
              donations  
            </div>       
            <div 
              className="ProjectDeatail-information-grid-item-right-numbers-Item"
              style={{ textAlign: "right" }}
            >
              <span style={{ fontWeight: "800" }}>
                ${_.get(projectInfo, 'amount')-_.get(projectInfo, 'donateAmount')}
              </span>
              <br/>
              still missing  
            </div>
          </div>
          {
            localStorage.getItem("userRole") === "GUEST" ?
            <Button 
              style={{ 
                color: 'white', 
                fontWeight: 500, 
                fontFamily: 'sans-serif',
                padding: '5px 10px',
                backgroundColor: 'saddlebrown',
                borderRadius: '5px',
                width: "100%",
                marginTop: "50px",
              }}
              onClick={handleDonateTrue}
            >
              Donation Now
            </Button> :
            <Button 
              style={{ 
                color: 'white', 
                fontWeight: 500, 
                fontFamily: 'sans-serif',
                padding: '5px 10px',
                backgroundColor: 'saddlebrown',
                borderRadius: '5px',
                width: "100%",
                marginTop: "50px",
              }}
              disable
            >
              You are not guest
            </Button> 
          }
          <Button 
            style={{ 
              color: 'red', 
              fontWeight: 500, 
              fontFamily: 'sans-serif',
              padding: '5px 10px',
              backgroundColor: 'white',
              borderRadius: '50px',
              width: "46%",
              marginTop: "10px",
              marginRight: "4%",
              border: "2px solid red",
            }}
          >
            Like
          </Button>
          <Button 
            style={{ 
              color: 'blue', 
              fontWeight: 500, 
              fontFamily: 'sans-serif',
              padding: '5px 10px',
              backgroundColor: 'white',
              borderRadius: '50px',
              width: "46%",
              marginTop: "10px",
              border: "2px solid blue",
            }}
          >
            Follow
          </Button>
          <span
            style={{ fontSize: "2.5vh", lineHeight: "0px" }}
          >
            You will receive a donation receipt from betterplace (gut.org gAG), the initial recipient of the donation.
          </span>
        </div>
      </div>
    )
    return (
      <Fragment>
        <div className='ProjectDetail-body-container'>
          <Title/>
          {
            DonateNow === false 
              ?
                <Fragment>
                  <Information/>
                  <NavPill projectInfo={projectInfo}/>
                </Fragment>
              :
                <DonationInputSection
                  handleDonateFalse={handleDonateFalse}
                  projectInfo={projectInfo}
                />
          }

        </div>
      </Fragment>
    );
  }
}

export default ProjectDetailSection;