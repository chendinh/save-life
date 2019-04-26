import React, {Component, Fragment} from 'react';
import NavPills from "components/NavPills/NavPills.jsx";
import DonationCountSection from "./DonationCountSection.jsx";

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
                <span>
                  <p>
                    {_.get(projectInfo, 'about')}
                  </p>
                  <br />
                  <h2>Thank you for reading</h2>
                </span>
              )
            },
            {
              tabButton: "Donations",
              tabIcon: Work,
              tabContent: (
                <DonationCountSection projectInfo={projectInfo}/>
              )
            },
            // {
            //   tabButton: "Comments",
            //   tabIcon: Comment,
            //   tabContent: (
            //     <span>
            //       <p>
            //         Comment section
            //       </p>
            //     </span>
            //   )
            // }
          ]}
        />
      </Fragment>
    )
  }
}
export default NavPill;