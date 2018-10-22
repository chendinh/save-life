const jwt = require('jsonwebtoken');
const { getById } = require('../service/users');

module.exports = function auth(req, res, next) {
  
  const token = req.headers['x-authorization-token'] || '';

  if (!token) {
    req.user = undefined;
    return next();
  } else {
    // getById
    // req.user = token;
    // return next();
    jwt.verify(token, CONFIG.jwt_encryption, function(err, decoded) {
      if (err) {
        return ResponeError(req, res, err, ErrorCode.JWT_EXPIRED);
      }

      getById(decoded['_id']).then((currentUser) => {
        currentUser.password = undefined;
        req.user = currentUser;
        return next();
      }).catch((error) => {
        return ResponeError(req, res, error, ErrorCode.JWT_EXPIRED);
      });
    });
  }
}
