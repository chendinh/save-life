const { Countries } = require('../models');

const getAll = async function(limit, skip) {
  try {

    const listCountries = await Countries.find({}).limit(limit).skip(skip);

    return listCountries;

  }catch (error) {
    return HandleError(error);
  }
};

const create = async function(country) {
  try {
    const CountriesModel = new Countries(country);

    const countrySaved= await CountriesModel.save();

    return countrySaved;

  }catch (error) {
    return HandleError(error);
  }
};


const update = async function (_id, data) {
  try {
    
    const country = await Countries.findById(_id);
  
    if (!country) {
      return HandleError(ErrorCode.COUNTRY_DOES_NOT_EXISTS);
    }
    country.set(data);
  
    const countryUpdated = await country.save();
  
    return countryUpdated;

  } catch (error) {
    return HandleError(error);
  }
};

const  countData = async function(filter) {
  try {
    const count = Countries.countDocuments(filter);
    
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
