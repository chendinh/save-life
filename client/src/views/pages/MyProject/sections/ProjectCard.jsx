import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import "../css/ProjectCard.css";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";
import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

const style = {
  ...imagesStyles,
  cardTitle
};

class ProjectCard extends Component {
  render() {
    const { classes, project } = this.props;
    return (
      <Fragment>
        <Link 
          to={{
            // search: '?projectID='+project._id,
            // hash: '#',
            // pathname: '/project',
            // // name: 'ProjectPageContainer',
            // state: {
            //   projectID: "213231231231232"
            // }
            pathname: `/project/${project._id}`,
            state: { 
              projectInfo: project
            }
          }}
          style={{ textDecoration: 'none' }}
        >
          <Card style={{ width: "20rem" }} className="project-card-container">
            <img
              style={{ height: "180px", width: "100%", display: "block" }}
              className={classes.imgCardTop}
              src={project.images.length !== 0  ? project.images : "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"}
              alt="Card-img-cap"
            />
            {
              localStorage.getItem('userRole') === 'GUEST' 
                ?
                  <CardHeader color="warning">
                    <span style={{float: 'left'}}>${project.totalAmountDonateToProject}</span>
                    <span style={{float: 'right'}}>{project.totalPercentDonateToProject}%</span>
                  </CardHeader>
                : null
            }
            <CardBody className="project-card-body">
              <h4 className={classes.cardTitle}>{project.title}</h4>
              <p className="project-card-about">
                {project.about}
              </p>
              <CustomLinearProgress
                variant="determinate"
                color="warning"
                value={project.process}
              />
              {/* <Button color="primary">Do something</Button> */}
            </CardBody>
          </Card>
        </Link>
      </Fragment>
    );
  }
}
export default  withStyles(style)(ProjectCard);