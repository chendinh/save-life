import React, {Component, Fragment} from 'react';
import _ from "lodash";
import axios from 'axios';
import DonationCard from './DonationCard.jsx'; 

class DonationCountSection extends Component {
  state={
    donationList: []
  }
  componentDidMount() {
    const { projectInfo } = this.props;
    axios.get('http://localhost:3000/api/version1/donates/'+_.get(projectInfo, '_id'), {
      params: {}
    })
    .then( response => {
      let donationList = [];
      response.data.result.donate.forEach( donation => {
        donationList.push(donation);
      });
      console.log("donation list:", donationList)
      this.setState({ donationList: donationList });
    })
  }
  render() {
    const { donationList } = this.state;

    const GridDonationCard = () => (
      <div 
        className="Donation-list-grid-container"
        style={{ 
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "auto auto",
          height: "auto",
          width: "70%",
          margin: "auto"
        }}
      >
        {
          donationList.map((donation, index) =>{
            return(
              <DonationCard 
                key={index} 
                donation={donation}
              />
            )
          })
        }
      </div>
    )

    return (
      <Fragment>
        <GridDonationCard/>
      </Fragment>
    )
  }
}
export default DonationCountSection;