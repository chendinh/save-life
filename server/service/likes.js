const {Likes} = require('../models');
const {STATUS} = require('../config/const').USER;

const getLiByProjectId = async function (projectId, limit, skip) {
  try{
    
    const likes = await Likes.find({project: projectId}).populate('user').limit(limit).skip(skip);
    
    return likes;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const create = async function (follow) {
  try{
    
    const LikeModel = new Likes(follow);
    
    const LikeSaved = await LikeModel.save();
    
    return LikeSaved;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const update = async function (_id, data) {
  try{
    const like = await Likes.findOne({_id: _id});
  
    if (!like) {
      return HandleError(ErrorCode.LIKE_NO_EXITS);
    }
  
    like.set(data);
    
    const LikeSaved = await like.save();
    
    return LikeSaved;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const  countData = async function(filter) {
  try {
    const count = Likes.countDocuments(filter);
    
    return count;
    
  }catch (error) {
    return HandleError(error);
  }
};

module.exports = {
  getLiByProjectId,
  create,
  update,
  countData
};