import React, {Component, Fragment} from 'react';
import "../css/ProjectCategorySection.css";
import ProjectCard from "./ProjectCard.jsx";

import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '@material-ui/core/Button';
// import Search from '@material-ui/icons/Search';

class ProjectCategorySection extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      projectList: [],
      loadMore: false,
      limit: 9,
      skip: 0,
      height: 800,
    };
  }

  handleOnClickLoadMore = () => {

  }

  componentDidMount() {
    const { categoryID, countryID } = this.props;
    console.log("limit:",this.state.limit)
    axios.get('http://localhost:3000/api/version1/projects/', {
      params: {
      //  limit: this.state.limit,
      //  skip: this.state.skip,
       categoryId: categoryID ? categoryID : null,
       countryId: countryID ? countryID : null
      }
    })
    .then( response => {
      let projectList = [];
      response.data.result.projects.forEach( project => {
        projectList.push(project);
      });
      console.log(projectList.length)
        let height = 0;
      if(projectList.length <= 3) {
        height = 450;
      }else if(projectList.length <= 6) {
        height =800;
      }else {
       height = (projectList.length / 3) * 440;
      }
      this.setState({ 
        projectList: projectList,
        loadMore: true,
        height: height
      });
    })
    // axios.get('http://localhost:3000/api/version1/countries/', {
    //   params: {}
    // })
    // .then( response => {
    //   let projectList = [];
    //   response.data.result.projects.forEach( project => {
    //     projectList.push(project);
    //   });
    //   console.log(projectList)
    //   this.setState({ projectList: projectList });
    // })
  }

  componentDidCatch() {
    const { categoryID, countryID } = this.props;
    console.log("limit:",this.state.limit)
    axios.get('http://localhost:3000/api/version1/projects/', {
      params: {
       limit: this.state.limit,
       skip: this.state.skip,
       categoryId: categoryID ? categoryID : null,
       countryId: countryID ? countryID : null
      }
    })
    .then( response => {
      let projectList = [];
      response.data.result.projects.forEach( project => {
        projectList.push(project);
      });
      console.log(projectList.length)
        let height = 0;
      if(projectList.length <= 3) {
        height = 450;
      }else if(projectList.length <= 6) {
        height =800;
      }else {
       height = (projectList.length / 3) * 440;
      }
      this.setState({ 
        projectList: projectList,
        loadMore: true,
        height: height
      });
    })
  }

  render() {
    AOS.init();
    const { projectList } = this.state;

    const GridProjectCard = () => (
      <div 
        className="grid-images-container"
        style={{ 
          marginTop: "40px",
          height: `${this.state.height}px`
        }}
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        {
          projectList.map((project, index) =>{
            return(
              <ProjectCard 
                key={index} 
                className="box-image-item"
                project={project}
              />
            )
          })
        }
      </div>
    )

    // const LoadMoreButton = () => (
    //   <Button
    //     style={{
    //       color: 'white', 
    //       fontWeight: 500, 
    //       fontFamily: 'sans-serif',
    //       padding: '5px 10px',
    //       backgroundColor: 'saddlebrown',
    //       width: '10%',
    //       margin: 'auto',
    //       marginBottom: '40px',
    //       display: 'block',          
    //     }}
    //     onClick={() => {
    //       let limit = this.state.limit + 9;
    //       this.setState({
    //         limit: limit
    //       });
    //     }}
    //   >
    //     {/* <Search/>  */}
    //     LOAD MORE
    //   </Button>
    // )
    
    return (
      <Fragment>
        <GridProjectCard/>
        {/* <LoadMoreButton/> */}
      </Fragment>
    )
  }
}

export default ProjectCategorySection;
