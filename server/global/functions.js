require('./variable');

const {isInteger} = require('lodash');

ResponeError = function(req, res, err, errorCode) {
  const dataRespone = {
    errorCode : isInteger(parseInt(errorCode)) ? parseInt(errorCode) : ErrorCode.OTHER_ERROR, 
    errorMessage: isInteger(parseInt(errorCode)) ? ErrorMessage[errorCode] : errorCode, 
    result: null
  };

  return res.json(dataRespone);
}

ResponeSuccess = function(req, res, data) {
  const dataRespone = {errorCode : ErrorCode.API_SUCCESS, errorMessage: "", result: data};

  return res.json(dataRespone);
}

HandleError = function(error) {
  // const errorCode = parseInt(error.mesage);

  // if (isInteger(errorCode)) {
  //   throw new Error(error.message);
  // }

  if (error.name) {
    switch (error.name) {
      case 'ValidationError':
      let properties = error.errors;
        for (let field in properties) {
          throw new Error(properties[field].path + ': ' + properties[field].message);
          break;
        }
        break;
    }
  }

  throw new Error(error.message);
}