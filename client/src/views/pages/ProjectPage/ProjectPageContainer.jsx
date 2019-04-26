import React, {Component} from 'react';
import ProjectPagePresentation from './ProjectPagePresentation.jsx';

class ProjectPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectInfo: null,
      DonateNow: false,
    };
  }
  componentDidMount() {
    this.setState({
      projectInfo: this.props.location.state.projectInfo,
    })
  }
  handleDonateTrue = () => {
    let DonateNow = true;
    this.setState({
      DonateNow
    });  }
  handleDonateFalse = () => {
    let DonateNow = false;
    this.setState({
      DonateNow
    });
  }
  render() {
    const { projectInfo, DonateNow } = this.state;
    return (
      <ProjectPagePresentation 
        projectInfo={projectInfo}
        DonateNow={DonateNow}
        handleDonateTrue={this.handleDonateTrue}
        handleDonateFalse={this.handleDonateFalse}
      />
    );
  }
}

export default ProjectPageContainer;
