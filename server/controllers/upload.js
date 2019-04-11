const {uploadFile} = require('../helper/upload');


const upload = async function (req, res) {
  try {
    
    await uploadFile(req, res);
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};


module.exports = {
  upload
};