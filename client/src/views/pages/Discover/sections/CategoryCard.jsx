import React, {Component, Fragment} from 'react';
import "../css/CategoryCard.css";
import DiscoverPage from "../DiscoverContainer.jsx";

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";
import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

const style = {
  ...imagesStyles,
  cardTitle
};

class CategoryCard extends Component {
  render() {
    const { classes, category, handleOnClick } = this.props;
    return(
      <Fragment>
        <Button
          onClick={() => handleOnClick(category)}
        >
          <Card 
            style={{ 
              width: "14rem",
              marginBottom: "5px",
              marginTop: "5px"
            }} 
            className="category-card-container"
          >
            {/* <img
              style={{ height: "130px", width: "100%", display: "block", zIndex: 10,  }}
              className={classes.imgCardTop}
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              //src={project.images}
              alt="Card-img-cap"
            /> */}
            <div className="category-card-title">
              {category.name}
            </div>
          </Card>
        </Button>
      </Fragment>
    )
  }
}
  
export default  withStyles(style)(CategoryCard);