import React, {Component,Fragment} from 'react';
//** Import file */
import Navbar from "./sections/Navbar.jsx";
import MainBanner from "./sections/MainBanner.jsx";
import CategorySection from "./sections/CategorySection.jsx";
import ProjectCategorySection from "./sections/ProjectCategorySection.jsx";

class HomePresentation extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { 
      handleOnLickDiscover, 
      handleOnClick, 
      isProjectListShow, 
      categoryID, 
      categoryName 
    } = this.props;
    return (
      <Fragment>
        <Navbar handleOnLickDiscover={handleOnLickDiscover}/>
        <MainBanner categoryName={categoryName}/>
        {isProjectListShow 
          ? <ProjectCategorySection 
              categoryID={categoryID}
              categoryName={categoryName}
            />
          : <CategorySection handleOnClick={handleOnClick}/>
        }   
      </Fragment>
    );
  }
}

export default HomePresentation;
