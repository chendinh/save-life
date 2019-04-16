import React, {Component, Fragment} from 'react';
import axios from 'axios';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
// core components
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";
class DashboardCountryList extends Component {
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
            "Id",
            "Country",
          ]}
          tableData={[
            ["1", "12efgewfegfefj", "Andrew Mike", fillButtons],
            ["2", "dgdsbbcbxcvxcv", "John Doe", fillButtons],
            ["3", "43tgtgrefddger", "Alex Mike", fillButtons]
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
export default withStyles(style)(DashboardCountryList);
