import React, {Component, Fragment} from 'react';
import MyProjectPresentation from './MyProjectPresentation.jsx';
import axios from 'axios';

class MyProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CreateProjectNow: false,
      categoryList: [],
      countryList: [],
      categoryIdSelect: '',
      countryIdSelect: '',
      fields: {

      }
    };
  }

  handleOnlickCreateProject = () => {
    console.log("all state: ", this.state)
    const { fields, categoryIdSelect, countryIdSelect } = this.state;
    axios.post('http://localhost:3000/api/version1/projects/', {
      userId: localStorage.getItem("userID"),
      personResponsible: {
        firstName: fields.firstName,
        lastName: fields.lastName,
        birthday: null,
        phone: fields.phone
      },
      status: "ACTIVE",
      title: fields.title,
      countryId: countryIdSelect,
      categoryId: categoryIdSelect,
      about: fields.about,
      amount: fields.amount,
      images: localStorage.getItem('image-createProject-link') ? "http://localhost:3000/"+localStorage.getItem('image-createProject-link') : null,
      percent: 100
      },{
        headers: {
          'Content-Type': 'application/json',
          'x-authorization-token': localStorage.getItem("tokenUser")
        }
      })
      .then(function (response) {
        if(response.data.errorCode === 0) {
          console.log(response);
        }else {
          console.log(response);
        }
      })
  }

  handleCategorySelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleCountrySelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    axios.get('http://localhost:3000/api/version1/categories/')
    .then( response => {
      let categoryList = [];
      response.data.result.categories.forEach( category => {
        categoryList.push(category);
      });
      this.setState({ categoryList: categoryList });
    })

    axios.get('http://localhost:3000/api/version1/countries/')
    .then( response => {
      let countryList = [];
      response.data.result.countries.forEach( country => {
        countryList.push(country);
      });
      this.setState({ countryList: countryList });
    })
  }

  handleCreateProject = () => {
    this.setState((state, props ) =>({
      CreateProjectNow: !state.CreateProjectNow
    }));
  }

  handleOnChange = event => {
    const fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    console.log(fields[event.target.name] + " change to " + event.target.value)
    this.setState(() => ({
      fields
    }));
  };

  render() {
    const { 
      CreateProjectNow, 
      categoryList, 
      countryList,
      categoryIdSelect,
      countryIdSelect
    } = this.state;
    return(
      <Fragment>
        <MyProjectPresentation
          handleOnChange={this.handleOnChange}
          handleCreateProject={this.handleCreateProject}
          CreateProjectNow={CreateProjectNow}
          categoryList={categoryList}
          countryList={countryList}

          categoryIdSelect={categoryIdSelect}
          handleCategorySelect={this.handleCategorySelect}
          countryIdSelect={countryIdSelect}
          handleCountrySelect={this.handleCountrySelect}

          handleOnlickCreateProject={this.handleOnlickCreateProject}
        />
      </Fragment>
    )
  }
}

export default MyProjectContainer;
