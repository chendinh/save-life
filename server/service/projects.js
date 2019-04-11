const { Projects } = require('../models');
const { Donates } = require('../models');
const {STATUS} = require('../config/const.js').USER;
const {checkExitsProject} = require('../helper/utils.js');
const {checkExitsCategory} = require('../helper/utils.js');
const {checkExitsCountry} = require('../helper/utils.js');

const getAllProjects = async function(query, limit, skip) {
  try {
  
      query.status = STATUS.ACTIVE;
      const listProjects = await Projects.find(query).limit(limit).skip(skip);
      
      return listProjects;
    
  }catch (error) {
    return HandleError(error);
  }
};

const create = async function(project) {
  try {
    const ProjectsModel = new Projects(project);
    
    const projectSaved= await ProjectsModel.save();
    
    return projectSaved;
    
  }catch (error) {
    return HandleError(error);
  }
};


const update = async function (_id, data) {
  try {
    const project = await Projects.findById(_id);
  
    if (!project) {
      return HandleError(ErrorCode.PROJECT_DOES_NOT_EXISTS);
    }
  
    project.set(data);
  
    const projectUpdated = await project.save();
  
    return projectUpdated;
  
  
  } catch (error) {
  
    return HandleError(error);
  }
};

const  countData = async function(filter) {
  try {
    filter.status = STATUS.ACTIVE;
    const count = Projects.countDocuments(filter);
    
    return count;
    
  }catch (error) {
    return HandleError(error);
  }
};

const recalculationProject = async function (data) {
  try {
    const project = await Projects.findById(data.projectId);
    
    if (!project) {
      return HandleError(ErrorCode.PROJECT_DOES_NOT_EXISTS);
    }
    
    const dataUpdate = {};
    
    dataUpdate.donateAmount = (project.donateAmount ? project.donateAmount : 0) + (data.amount ? data.amount : 0);
    dataUpdate.process = (project.process ? project.process : 0) + (data.percent ? data.percent : 0);
    dataUpdate.donationsCount = project.donationsCount + 1;
    
    project.set(dataUpdate);
    
    const projectUpdated = await project.save();
    
    return projectUpdated;
    
    
  } catch (error) {
    
    return HandleError(error);
  }
};

module.exports = {
  getAllProjects,
  create,
  update,
  countData,
  recalculationProject
};