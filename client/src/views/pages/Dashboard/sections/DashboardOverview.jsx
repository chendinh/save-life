import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import _ from "lodash";
import moment from "moment";
import '../css/DashboardOverview.css';
import { Timeline, Accessibility, Business, AttachMoney } from "@material-ui/icons";
import Table from "components/Table/Table.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

class DashboardOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CategoryStatistics: [],
      CountryStatistics: [],
      totalCompany: 0,
      totalGuest: 0,
      totalProject: 0,
      data: {},
    };
  }

  returnMonthLabel = () => {
    const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const MonthUtilNow = [];
    let i =0;
    for (i = 0; i < moment().months()+1; i++) { 
      MonthUtilNow.push(Months[i])
    }
    return MonthUtilNow;
  }

  componentDidMount() {
    // FOR Statistics 
    // console.log("moment: " + moment().months())
    axios.get('http://localhost:3000/api/version1/projects/statistic', {
      params: {}
    })
    .then( response => {
      console.log(response)
      var statistics =[];
      let i;
      for (i = 0; i < moment().months()+1; i++) { 
        statistics.push(_.get(response.data.result.statistics[i], 'count'))
      }
      var data = {
        labels: this.returnMonthLabel(),
        datasets: [
          {
            label: 'Number of project',
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
            data: statistics
          }
        ]
      };

      
      let j =0;
      let statisticByCountries = []
      for (j = 0; j < response.data.result.statisticByCountries.length ; j++) { 
        statisticByCountries.push([
          j+1, 
          response.data.result.statisticByCountries[j].name,
          response.data.result.statisticByCountries[j].countProject,
        ])
      }
      let k = 0
      let statisticByCategories = []
      for (k = 0; k < response.data.result.statisticByCategories.length ; k++) { 
        statisticByCategories.push([
          k+1, 
          response.data.result.statisticByCategories[k].name,
          response.data.result.statisticByCategories[k].countProject,
        ])
      }

      this.setState({ 
        CategoryStatistics: statisticByCategories,
        CountryStatistics: statisticByCountries,
        totalProject: response.data.result.total,
        data : data
      });
    })

    // FOR USER 

    axios.get('http://localhost:3000/api/version1/users/statistic', {
      params: {}
    })
    .then( response => {
      this.setState({ 
        totalCompany: response.data.result.totalCompany,
        totalGuest: response.data.result.totalGuest
      });
    })
  }

  render() {
    console.log(this.state)
    const { totalCompany, totalGuest, totalProject, CountryStatistics, CategoryStatistics } = this.state;
    const { classes } = this.props;

    const CardInfo = (props) => (
      <div className="Dashboard-card-item">
        <div className="Dashboard-card-item-ofitem-icon">
          {
            props.title === 'GUEST' 
              ? <Accessibility style={{ fontSize: "40px", marginLeft: "5px", color:"blue" }}/>
              : props.title === 'ERROR' 
                ? <Timeline style={{ fontSize: "40px", marginLeft: "5px", color:"red" }}/>
                : props.title === 'COMPANY' 
                  ? <Business style={{ fontSize: "40px", marginLeft: "5px", color:"purple" }}/>
                  : props.title === 'PROJECT' 
                    ?  <AttachMoney style={{ fontSize: "40px", marginLeft: "5px", color:"yellow" }}/>
                    : null
          }
        </div>
        <div className="Dashboard-card-item-ofitem-text">
          <p style={{ fontSize: "40px", fontWeight: "800", marginRight: "5px", marginBottom: 0, marginTop: 0 }}>{props.number}</p>
          <p style={{ fontSize: "10px", marginRight: "5px" }}>{props.title}</p>
        </div>
      </div>
    )
    return (
      <Fragment>
        {/* Line Chart  */}
        <div
          style={{
            width: "100%",
            height: "400px",
            marginTop: "20px"
          }}
        >
        <Line 
          data={this.state.data} 
          width={100}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
        </div>
        <div className="Dashboard-card-container">
          <CardInfo
            number={totalCompany}
            title="COMPANY"
          />
          <CardInfo
            number={totalGuest}
            title="GUEST"
          />
          <CardInfo
            number="0"
            title="ERROR"
          />
          <CardInfo
            number={totalProject}
            title="PROJECT"
          />
        </div>
        <div className="dashboard-overview-tableSection-container">
          <Table
            tableHead={[
              "Top",
              "Country",
              "Project",
            ]}
            tableData={CountryStatistics.map( data => data)}
            customCellClasses={[
              classes.textCenter,
              classes.textRight,
              classes.textRight
            ]}
            customClassesForCells={[0, 4, 5]}
            customHeadCellClasses={[
              classes.textCenter,
              classes.textRight,
              classes.textRight
            ]}
            customHeadClassesForCells={[0, 4, 5]}
          />
          <Table
            tableHead={[
              "Top",
              "Category",
              "Project",
            ]}
            tableData={CategoryStatistics.map( data => data)}
            customCellClasses={[
              classes.textCenter,
              classes.textRight,
              classes.textRight
            ]}
            customClassesForCells={[0, 4, 5]}
            customHeadCellClasses={[
              classes.textCenter,
              classes.textRight,
              classes.textRight
            ]}
            customHeadClassesForCells={[0, 4, 5]}
          />
        </div>
 

      </Fragment>
    )
  }
}
export default withStyles(style)(DashboardOverview);
