const DonateService = require('../service/donates.js');
const ProjectService = require('../service/projects');
const followsService = require('../service/follows');
const {validateDonate} = require('../helper/validation');
const notificationsService = require('../service/notifications');
const {validateFollows} = require('../helper/validation');
const { ROLE, STATUS_TYPE, STATUS} = require('../config/const').USER;


const getByProjectId = async function (req, res) {
  try {
    const user = req.user;
    const projectId = req.params.projectId;
    if (!user || !projectId){
      
      return ResponeSuccess(req, res, {});
    }
    
    const donate = await DonateService.getDonate(projectId);
  
    return ResponeSuccess(req, res, {donate});
  
  }catch (error) {
    return ResponeError(req, res, error, error.message);
  }
};

const create = async function (req, res) {
  try {
    const data = req.body;
    const user = req.user;
  
    const {result, error } = await validateDonate(data, user);
  
    if (error) {
      return ResponeError(req, res, null, error);
    }
  
    const donate = await DonateService.create(result);
  
    const project = await ProjectService.recalculationProject(result);
  
    const follow = {
      user: user._id,
      project: project._id,
      status: STATUS.ACTIVE,
    };
  
    await followsService.create(follow);
  
    await notificationsService.create(donate, user);
  
    return ResponeSuccess(req, res, {donate});
  }catch (error) {
    return ResponeError(req, res, error, error.message);
  }
};

module.exports = {
  getByProjectId,
  create,
};