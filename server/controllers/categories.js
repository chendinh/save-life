const categoriesService = require('../service/categories');
const {validateCategory} = require('../helper/validation.js');

const getAll = async function (req, res) {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit) : 20;
    const skip = req.query.skip ? parseInt(req.query.skip) : 0;
    let count = 0;
    
    count = await categoriesService.countData({});
    const categories = await categoriesService.getAll(limit, skip);
    
    return ResponeSuccess(req, res, {categories, total: count});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const create = async function (req, res) {
  try {
    let user = req.user;
    let data = req.body;
    const {result, error} = await validateCategory(data, user);
  
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const category = await categoriesService.create(result);
    
    return ResponeSuccess(req, res, {category});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const update = async function (req, res) {
  try {
    let user = req.user;
    let _id = req.params._id;
    let body = req.body;
    
    const {result, error} = await validateCategory(body, user);
  
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const category = await categoriesService.update(_id, result);
    
    return ResponeSuccess(req, res, {category});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

module.exports = {
  getAll,
  create,
  update,
};