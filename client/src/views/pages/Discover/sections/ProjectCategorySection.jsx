import React, {Component, Fragment} from 'react';
import "../css/ProjectCategorySection.css";
import ProjectCard from "./ProjectCard.jsx";

import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

class ProjectCategorySection extends Component {
  constructor(props) {
    super(props);
    this.state = { projectList: [] };
  }
  componentDidMount() {
    const { categoryID } = this.props;
    axios.get('http://localhost:3000/api/version1/projects/', {
      params: {
       limit: 9,
       skip: 0,
       categoryId: categoryID
      }
    })
    .then( response => {
      let projectList = [];
      response.data.result.projects.forEach( project => {
        projectList.push(project);
      });
      console.log(projectList)
      this.setState({ projectList: projectList });
    })
  }
  render() {
    AOS.init();
    const { projectList } = this.state;

    const GridProjectCard = () => (
      <div 
        className="grid-images-container"
        style={{ marginTop: "40px" }}
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
    return (
      <Fragment>
        <GridProjectCard/>
      </Fragment>
    )
  }
}

export default ProjectCategorySection;
