import React, {Component, Fragment} from 'react';
import "../css/CategorySection.css";
import CategoryCard from "./CategoryCard.jsx";

import axios from 'axios';

class CategorySection extends Component {
  constructor(props) {
    super(props);
    this.state = { categoryList: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:3000/api/version1/categories/')
    .then( response => {
      let categoryList = [];
      response.data.result.categories.forEach( category => {
        categoryList.push(category);
      });
      this.setState({ categoryList: categoryList });
    })
  }

  render() {
    const { categoryList } = this.state;
    const { handleOnClick } = this.props;
    const GridCategoryCard = () => (
      <div 
        className="Category-grid-images-container"
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        {
          categoryList.map((category, index) =>{
            return(
              <CategoryCard 
                key={index} 
                className="Category-box-image-item"
                category={category}
                handleOnClick={handleOnClick}
              />
            )
          })
        }
      </div>
    )
    return (
      <Fragment>
        <GridCategoryCard/>
      </Fragment>
    );
  }
}

export default CategorySection;