import React, {Component} from 'react';
//** Import file */
import DiscoverPresentation from './DiscoverPresentation.jsx';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      categoryID: null,
      categoryName: null,
      isProjectListShow: false
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleOnClick = (e) => {
    console.log(e);
    this.setState({
      categoryID: e._id,
      categoryName: e.name,
      isProjectListShow: true
    })
  }
  handleOnLickDiscover = () => {
    this.setState({
      categoryID: null,
      categoryName: null,
      isProjectListShow: false
    })
  }
  render() {
    const { isProjectListShow, categoryID, categoryName } = this.state;
    return (
      <DiscoverPresentation 
        handleOnLickDiscover={this.handleOnLickDiscover}
        categoryName={categoryName}
        categoryID={categoryID}
        isProjectListShow={isProjectListShow}
        handleOnClick={this.handleOnClick}
      />
    );
  }
}

export default HomeContainer;
