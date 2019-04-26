import React, {Component, Fragment} from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard.jsx';

class ProjectListSection extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      projectList: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3000/api/version1/projects/my', {
      params: {
      //  limit: this.state.limit,
      //  skip: this.state.skip,
      },
      headers: {
        'Content-Type': 'application/json',
        'x-authorization-token': localStorage.getItem("tokenUser")
      }
    })
    .then( response => {
      let projectList = [];
      response.data.result.projects.forEach( project => {
        projectList.push(project);
      });
      console.log(projectList)
      this.setState({ 
        projectList: projectList,
      });
    })
  }

  render() {
    const { projectList } = this.state;
    
    const GridProjectCard = () => (
      <div 
        className="grid-images-container"
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
    );
  }
}

export default (ProjectListSection);