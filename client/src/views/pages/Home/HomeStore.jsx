import { Component } from 'react';
import { decorate, observable, action, computed } from 'mobx';
import ServiceUrl from '../../../../src/Config.js'
import axios from 'axios';

class HomeStore extends Component {
  projectList = []
  
  addDataProject = (data) => {
    this.projectList.push(data);
  }

  getProjectListAPI = () => {
    axios.get('http://localhost:3000/api/version1/projects/', {
      params: {
      //  limit: 9,
      //  skip: 0
      }
    })
    .then(function (response) {
      this.projectList = response.data.result.projects;
    })
    .catch(function (error) {
      return false
    })
  }

  get getProjectList() {
    return this.projectList
  }
}

decorate(HomeStore, {
  projectList: observable,
  getProjectListAPI: action,
  addDataProject: action,
  getProjectList: computed
});

export default HomeStore;
