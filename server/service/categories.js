const {Categories} = require('../models');

const getAll = async function (limit, skip) {
  try {
    
    const listCategories = await Categories.find({}).limit(limit).skip(skip);
    
    return listCategories;
    
  } catch (error) {
    return HandleError(error);
  }
};

const create = async function (category) {
  try {
    const categoriesModel = new Categories(category);
    
    const categorySaved = await categoriesModel.save();
    
    return categorySaved;
    
  } catch (error) {
    return HandleError(error);
  }
};


const update = async function (_id, data) {
  try {
    const category = await Categories.findById(_id);
  
    if (!category) {
      return HandleError(ErrorCode.CATEGORY_DOES_NOT_EXISTS);
    }
  
    category.set(data);
  
    const categoryUpdated = await category.save();
  
    return categoryUpdated;
  } catch (error) {
    
    return HandleError(error);
  }
};

const  countData = async function(filter) {
  try {
    const count = Categories.countDocuments(filter);
    
    return count;
    
  }catch (error) {
    return HandleError(error);
  }
};

module.exports = {
  getAll,
  create,
  update,
  countData
};