import React, {Component, Fragment} from 'react';
import Navbar from './sections/Navbar.jsx';
import ProjectDetailSection from './sections/ProjectDetailSection.jsx';

class ProjectPagePresentation extends Component {
  render() {
    const { projectInfo, DonateNow, handleDonateTrue, handleDonateFalse } = this.props;
    return (
      <Fragment>
        <Navbar/>
        <ProjectDetailSection 
          projectInfo={projectInfo} 
          DonateNow={DonateNow}
          handleDonateTrue={handleDonateTrue}
          handleDonateFalse={handleDonateFalse}
        /> 
      </Fragment>
    );
  }
}

export default ProjectPagePresentation;