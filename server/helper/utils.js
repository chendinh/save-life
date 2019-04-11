
const validateEmail = function(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateUserName = function(username) {
	var re = /^[a-zA-Z0-9]*$/;
    return re.test(String(username).toLowerCase());
};
const validateBoolean = function(is_read) {
	if (typeof is_read === 'boolean'){
	  return true;
  }else {
	  return false;
  }
};


module.exports = {
	validateEmail,
  validateUserName,
  validateBoolean
};