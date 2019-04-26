import React, {Component} from 'react';
//** Import file */
import DiscoverPresentation from './DiscoverPresentation.jsx';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      categoryID: null,
      categoryName: null,
      countryID: null,
      countryName: null,
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
  handleSearchCountryOnClick = (e) => {
    console.log(e);
    this.setState({
      countryID: e,
      // countryName: e.name,
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
    const { isProjectListShow, countryID, categoryID, categoryName } = this.state;
    return (
      <DiscoverPresentation 
        handleOnLickDiscover={this.handleOnLickDiscover}
        categoryName={categoryName}
        categoryID={categoryID}
        countryID={countryID}
        isProjectListShow={isProjectListShow}
        handleOnClick={this.handleOnClick}
        handleSearchCountryOnClick={this.handleSearchCountryOnClick}
      />
    );
  }
}

export default HomeContainer;
