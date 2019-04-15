import React, {Component} from 'react';
import ProjectPagePresentation from './ProjectPagePresentation.jsx';

class ProjectPageContainer extends Component {
  state = {
    projectInfo: null,
  };
  componentDidMount() {
    this.setState({
      projectInfo: this.props.location.state.projectInfo
    })
  }
  render() {
    const { projectInfo } = this.state;
    return (
      <ProjectPagePresentation projectInfo={projectInfo}/>
    );
  }
}

export default ProjectPageContainer;
