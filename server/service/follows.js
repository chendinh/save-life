const {Follows} = require('../models');
const {STATUS} = require('../config/const').USER;

const getFlsByProjectId = async function (projectId, limit, skip) {
  try{
    
    const follows = await Follows.find({project: projectId}).populate('user').limit(limit).skip(skip);
    
    return follows;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const getFollowProjectWitUser = async function (user, limit, skip) {
  try{
    
    const follows = await Follows.find({user: user._id}).populate('project').limit(limit).skip(skip);
    
    return follows;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const create = async function (follow) {
  try{
    
    const FollowsModel = new Follows(follow);
    
    const FollowSaved = await FollowsModel.save();
    
    return FollowSaved;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const update = async function (_id, data) {
  try{
    const follow = await Follows.findOne({_id: _id});
  
    if (!follow) {
      return HandleError(ErrorCode.FOLLOW_NO_EXITS);
    }
  
    follow.set(data);
    
    const FollowSaved = await follow.save();
    
    return FollowSaved;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const  countData = async function(filter) {
  try {
    const count = Follows.countDocuments(filter);
    
    return count;
    
  }catch (error) {
    return HandleError(error);
  }
};

module.exports = {
  getFlsByProjectId,
  getFollowProjectWitUser,
  create,
  update,
  countData
};