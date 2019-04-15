import React, {Component, Fragment} from 'react';
import _ from "lodash";
import axios from 'axios';

class DonationCountSection extends Component {
  state={
    donationList: []
  }
  componentDidMount() {
    const { projectInfo } = this.props;
    axios.get('http://localhost:3000/api/version1/donates/'+_.get(projectInfo, '_id'), {
      params: {
        // projectId: _.get(projectInfo, '_id'),
      }
    })
    .then( response => {
      let donationList = [];
      console.log("response: ", response)
      // response.data.result.projects.forEach( donor => {
      //   donationList.push(donor);
      // });
      // this.setState({ donationList: donationList });
    })
  }
  render() {
    const { projectInfo } = this.props;
    return (
      <Fragment>
        List Donors
      </Fragment>
    )
  }
}
export default DonationCountSection;