import React, {Component, Fragment} from 'react';
import '../css/ProjectDetailSection.css';
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import _ from "lodash";
import { Button } from '@material-ui/core';
import NavPill from './NavPill.jsx';

class ProjectDetailSection extends Component {
  render() {
    const { projectInfo } = this.props;
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
          src={_.head(_.get(projectInfo, 'images'))}
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
            localStorage.getItem("userRole") === "ADMIN" ?
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
            >
              Donation Now
            </Button> : null
          }
          <Button 
            style={{ 
              color: 'red', 
              fontWeight: 500, 
              fontFamily: 'sans-serif',
              padding: '5px 10px',
              backgroundColor: 'white',
              borderRadius: '50px',
              width: "48%",
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
              width: "48%",
              marginTop: "10px",
              border: "2px solid blue",
              fontWeight: "500"
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
          <Information/>
          <NavPill projectInfo={projectInfo}/>
        </div>
      </Fragment>
    );
  }
}

export default ProjectDetailSection;