const projectsService = require('../service/projects');
const donatesService = require('../service/donates');
const {validateProject} = require('../helper/validation');
const {ROLE} = require('../config/const.js').USER;
const {Projects} = require('../models');

const getAll = async function (req, res) {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit) : 20;
    const skip = req.query.skip ? parseInt(req.query.skip) : 0;
    const categoryId = req.query.categoryId || '';
    const match = {};
    
    if (categoryId) {
      match.categoryId = categoryId;
    }
  
    const count = await projectsService.countData(match);
    const projects = await projectsService.getAllProjects(match, limit, skip);
    
    return ResponeSuccess(req, res, {projects, total: count});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const getAllOfMe = async function (req, res) {
  try {
    const user = req.user;
    const limit = req.query.limit || 20;
    const skip = req.query.skip || 0;
    let count = 0;
    let projects = [];
    
    if(user.role == ROLE.COMPANY) {
      count = await projectsService.countData({userId: user._id});
      
      projects = await projectsService.getAllProjects({userId: user._id}, limit, skip);
      
    }else if (user.role == ROLE.GUEST){
      let pipeline = [
        {$match: {userId: user._id}},
        {$group: {_id: '$projectId' , projectId: {$first: '$projectId'}}},
        {$limit: limit},
        {$skip: skip}
      ];
      let results = await donatesService.getWithAggregate(pipeline);
  
      count = await donatesService.countWithAggregate(pipeline);
      
      if (results && results.length){
        projects = await Projects.populate(results, {path: '_id'});

        projects = projects.map(pro => pro._id);
      }
    }
    
    return ResponeSuccess(req, res, {projects, total: count});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const create = async function (req, res) {
  try {
    const data = req.body;
    const user = req.user;
    
    const {result, error} = await validateProject(data, user);
    
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const project = await projectsService.create(result);
    
    return ResponeSuccess(req, res, {project});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const update = async function (req, res) {
  try {
    const body = req.body;
    const user = req.user;
    const _id = req.params._id;
    
    const {result, error} = await validateProject(body, user);
    
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const project = await projectsService.update(_id, result);
    
    return ResponeSuccess(req, res, {project});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};


module.exports = {
  getAll,
  getAllOfMe,
  create,
  update
};
