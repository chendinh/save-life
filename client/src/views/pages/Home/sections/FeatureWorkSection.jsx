import React, {Component, Fragment} from 'react';
//** Import file */
import "../css/FeatureWork.css";
import TitleSection from "./TitleSection.jsx";
import ProjectCard from "./ProjectCard.jsx";
import axios from 'axios';

// React-slick
import Slider from "react-slick";
import "../../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

class FeatureWorkSection extends Component {
  constructor(props) {
    super(props);
    this.state = { projectList: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:3000/api/version1/projects/', {
      params: {
       limit: 9,
       skip: 0
      }
    })
    .then( response => {
      let projectList = [];
      response.data.result.projects.forEach( project => {
        projectList.push(project);
      });
      this.setState({ projectList: projectList });
    })
  }
  render() {
    AOS.init();
    const { projectList } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const ImageBox = (props) => (
      <div 
        className={props.className} 
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      />
    )
    const GridImages = () => (
      <div className="grid-images-container">
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
    const GridMobileImages = () => (
      <div className="grid-mobile-images-container">
        <Slider {...settings}>
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
        </Slider>
      </div>
    )
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
        <div className="FeatureWork-Container">
          <TitleSection kind="feature work"/>
          {/* <GridImages/> */}
          {/* <GridMobileImages/> */}
          <GridProjectCard/>
        </div>
      </Fragment>
    );
  }
}

export default FeatureWorkSection;