import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import _ from "lodash";
import moment from "moment";

const data = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81]
    }
  ]
};

class DashboardOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statistics: null,
      userStatistic: null
    };
  }

  componentDidMount() {
    console.log("moment: " + moment().month())
    
    axios.get('http://localhost:3000/api/version1/projects/statistic', {
      params: {}
    })
    .then( response => {
      let statistics = [];
      var i;
      for (i = 0; i < moment().month("Number"); i++) { 
        statistics.push(response.data.result.statistics[i])
      }
      console.log(response.data.result.statistics)
      // {_.get(projectInfo, 'title')}
      // response.data.result.statistics.forEach( statistics => {
      //   statistics.push(statistics);
      // });
      console.log(statistics)
      this.setState({ statistics: statistics });
    })
    axios.get('http://localhost:3000/api/version1/users/statistic', {
      params: {}
    })
    .then( response => {
      let userStatistic = userStatistic;
      console.log(response.data.result)
      // response.data.result.projects.forEach( project => {
      //   projectList.push(project);
      // });
      // console.log(projectList)
      this.setState({ userStatistic: userStatistic });
    })
  }

  render() {
    return(
      <Fragment>
        <div
          style={{
            width: "100%",
            height: "400px"
          }}
        >
        <Line 
          data={data} 
          width={100}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
        </div>
      </Fragment>
    )
  }
}
export default DashboardOverview;
