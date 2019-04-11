const {Comments} = require('../models');
const {STATUS_TYPE} = require('../config/const').USER;

const getCommentsByProjectId = async function (projectId, limit, skip) {
  try{
    
    const comments = await Comments.find({project: projectId, type: STATUS_TYPE.COMMENT}).limit(limit).skip(skip);
    comments.forEach(async function (comment) {
      if (comment && comment._id) {
        comment.arrayReply = await Comments.find({parent: comment._id}).lean(true);
      }
    });
    
    return comments;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const create = async function (comment) {
  try{
    
    const CommentsModel = new Comments(comment);
    
    const CommentSaved = await CommentsModel.save();
    
    return CommentSaved;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const update = async function (_id, data) {
  try{
    const comment = await Comments.findOne({_id: _id});
  
    if (!comment) {
      return HandleError(ErrorCode.COMMENT_NO_EXITS);
    }
  
    comment.set(data);
    
    const CommentSaved = await comment.save();
    
    return CommentSaved;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const  countData = async function(filter) {
  try {
    const count = Comments.countDocuments(filter);
    
    return count;
    
  }catch (error) {
    return HandleError(error);
  }
};

module.exports = {
  getCommentsByProjectId,
  create,
  update,
  countData
};