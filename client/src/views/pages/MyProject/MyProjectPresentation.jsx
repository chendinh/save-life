import React, {Component, Fragment} from 'react';
import Navbar from './sections/Navbar.jsx';
import MainBanner from './sections/MainBanner.jsx';
import ProjectListSection from './sections/ProjectListSection.jsx';
import CreateProjectSection from './sections/CreateProjectSection.jsx';
import { Button } from '@material-ui/core';
import LibraryAdd from '@material-ui/icons/LibraryAdd';

class MyProjectPresentation extends Component {
  render() {
    const { 
      handleCreateProject, 
      CreateProjectNow, 
      handleOnChange,
      categoryList,
      countryList,

      categoryIdSelect,
      handleCategorySelect,
      handleCountrySelect,
      countryIdSelect,

      handleOnlickCreateProject,
    } = this.props;

    const CreateProjectButton = () => (
      <Button
        round
        style={{
          color: 'white', 
          fontWeight: 500, 
          fontFamily: 'sans-serif',
          padding: '10px 10px',
          height: '50px',
          backgroundColor: 'saddlebrown',
          display: 'block',
          margin: 'auto',
          marginTop: '50px',
        }}
        onClick={handleCreateProject}
      >
        <LibraryAdd/>
        {
          CreateProjectNow === false 
            ? "Create Project"
            : "Back to Project List"
        }
      </Button>
    )
    return(
      <Fragment>
        <Navbar/>
        <MainBanner/>
        {
          localStorage.getItem('userRole') === 'COMPANY' 
            ? <CreateProjectButton/> : null
        }
        {
          CreateProjectNow === false 
            ? <ProjectListSection/>
            : 
              <CreateProjectSection
                handleOnChange={handleOnChange}
                categoryList={categoryList}
                countryList={countryList}

                countryIdSelect={countryIdSelect}
                categoryIdSelect={categoryIdSelect}
                handleCategorySelect={handleCategorySelect}
                handleCountrySelect={handleCountrySelect}
                handleOnlickCreateProject={handleOnlickCreateProject}
              />
        }
      </Fragment>
    )
  }
}

export default MyProjectPresentation;
