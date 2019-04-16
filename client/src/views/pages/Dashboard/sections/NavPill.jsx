import React, {Component, Fragment} from 'react';
import NavPills from "components/NavPills/NavPills.jsx";
import DashboardOverview from "./DashboardOverview.jsx";
import DashboardProjectList from "./DashboardProjectList.jsx";
import DashboardCountryList from "./DashboardCountryList.jsx";
import DashboardCategoryList from "./DashboardCategoryList.jsx";

import { Comment, Work, FolderShared } from "@material-ui/icons"
import _ from "lodash";

class NavPill extends Component {
  render() {
    const { projectInfo } = this.props;
    return (
      <Fragment>
        <NavPills
          alignCenter={true}
          color="warning"
          tabs={[
            {
              tabButton: "Overview",
              tabIcon: FolderShared,
              tabContent: (
                <DashboardOverview/>
              )
            },
            {
              tabButton: "Project List",
              tabIcon: Work,
              tabContent: (
                <DashboardProjectList/>
              )
            },
            {
              tabButton: "Category List",
              tabIcon: Comment,
              tabContent: (
                <DashboardCategoryList/>
              )
            },
            {
              tabButton: "Country List",
              tabIcon: Comment,
              tabContent: (
                <DashboardCountryList/>
              )
            }
          ]}
        />
      </Fragment>
    )
  }
}
export default NavPill;