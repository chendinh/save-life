import React, {Component} from 'react';
import DashboardPresentation from "./DashboardPresentation.jsx";
import axios from 'axios';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {

      },
    };
  }

  render() {
    return(
      <DashboardPresentation/>
    )
  }
}
export default DashboardContainer;
