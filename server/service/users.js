const { Users } = require('../models');

const create = async function(data) {
	try {
		const userModel = new Users(data);

		const user = await userModel.save();

		return user;
	} catch(error) {
		return HandleError(error);
	}
};

const getById = async function(_id) {
	try {
		const user = await Users.findById(_id);

		if (user) {
			user.password = undefined;
		}

		return user;
	} catch(error) {
		return HandleError(error);
	}
};

const authUser = async function(username, password) {
	try {
		const user = await Users.findOne({username: username});

		if (!user) {
			return HandleError(ErrorCode.USER_NOT_EXISTS);
		}

		const authentication = await user.comparePassword(password);

		if (!authentication) {
			return HandleError(ErrorCode.USER_NAME_OR_PASSWORD_INVALID);
		}

		user.password = undefined;

		return user;
	} catch(error) {
		return HandleError(error);
	}
};

module.exports = {
	create,
	getById,
	authUser
};