import React, {Component, Fragment} from 'react';
// import axios from 'axios';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
// core components
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

class DashboardProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {

      },
    };
  }

  render() {
    const { classes } = this.props;
    const fillButtons = [
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button justIcon size="sm" color={prop.color} key={key}>
          <prop.icon />
        </Button>
      );
    });
    return(
      <Fragment>
        <Table
            tableHead={[
              "#",
              "Name",
              "Job Position",
              "Since",
              "Salary",
              "Actions"
            ]}
            tableData={[
              ["1", "Andrew Mike", "Develop", "2013", "€ 99,225", fillButtons],
              ["2", "John Doe", "Design", "2012", "€ 89,241", fillButtons],
              ["3", "Alex Mike", "Design", "2010", "€ 92,144", fillButtons],
              ["4", "Hary", "Design", "2017", "€ 52,144", fillButtons],
              ["5", "Moto", "Design", "2014", "€ 62,144", fillButtons],
              ["6", "Honda", "Design", "2010", "€ 52,144", fillButtons],
              ["7", "BWM", "Design", "2011", "€ 93,144", fillButtons],
              ["8", "Audi", "Design", "2010", "€ 99,144", fillButtons],

            ]}
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
      </Fragment>
    )
  }
}
export default withStyles(style)(DashboardProjectList);

