import React, {Component, Fragment} from 'react';
import Navbar from './sections/Navbar.jsx';
import ProjectDetailSection from './sections/ProjectDetailSection.jsx';

class ProjectPagePresentation extends Component {
  render() {
    const { projectInfo } = this.props;
    return (
      <Fragment>
        <Navbar/>
        <ProjectDetailSection projectInfo={projectInfo}/>
      </Fragment>
    );
  }
}

export default ProjectPagePresentation;