const {Donates} = require('../models');

const getDonate = async function (filter, limit, skip) {
  try{
    
    const donate = await Donates.find(filter).populate('userId').limit(limit).skip(skip);
  
    return donate;
    
  }catch (error) {
    return HandleError(error);
  
  }
};

const create = async function (donate) {
  try{
  
    const DonatesModel = new Donates(donate);
  
    const donateSaved= await DonatesModel.save();
    
    return donateSaved;
    
  }catch (error) {
    return HandleError(error);
  
  }
};

const  countData = async function(filter) {
  try {
    const count = Donates.countDocuments(filter);
    
    return count;
    
  }catch (error) {
    return HandleError(error);
  }
};

const  countWithAggregate = async function(query) {
  try {
    query.push({
      $count: 'count'
    });
    const [result] = await Donates.aggregate(query);
    
    return result.count;
    
  }catch (error) {
    return HandleError(error);
  }
};

const  getWithAggregate = async function(pipeline) {
  try {
    const data = await Donates.aggregate(pipeline);
    
    return data;
    
  }catch (error) {
    return HandleError(error);
  }
};

module.exports = {
  getDonate,
  create,
  countData,
  countWithAggregate,
  getWithAggregate
};
