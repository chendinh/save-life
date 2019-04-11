const connections = require('../../config/mongodb').master;
const {STATUS} = require('../../config/const').USER;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = {
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  status: {type: String, required: true, default: STATUS.ACTIVE},
  role: {type: String, required: true},
  firstName: {type: String},
  lastName: {type: String},
  birthDay: {type: Date},
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true
    // required: 'Email address is required',
    // validate: [validateEmail, 'Please fill a valid email address'],
    // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  phoneNumber: {type: String},
  gender: {type: String},
  position: {type: String},
  information: {
    nameCompany: {type: String},
    address: {type: String},
    taxCode: {type: String}
  },
	avatar: {type: String}
};

const usersSchema = new Schema(users, { timestamps: true });


// usersSchema.method('comparePassword',  async function (password) {});
// usersSchema.statics.comparePassword3 = function(password) {};
usersSchema.methods.comparePassword = async function(password) { 
    try {
    	let success = false;
    	let _this = this;

    	success = bcrypt.compareSync(password, _this.password);

    	return success;
    } catch(error) {
    	console.error(error);
    	throw new Error(error.message);
    }
 };

 usersSchema.methods.generateToken = async function() {
    try {
    	let _this = this;
    	let expiration_time = parseInt(CONFIG.jwt_expiration);
    	let token = jwt.sign({ _id: _this._id }, CONFIG.jwt_encryption, { expiresIn: expiration_time });

    	return token;
    } catch(error) {
    	console.error(error);
    	throw new Error(error.message);
    }
 };

usersSchema.pre('save', async function(next) {
	try {
		let _this = this;

		if (_this.isModified('password')) {
			const  salt = bcrypt.genSaltSync(10);
			const  hash = bcrypt.hashSync(_this.password, salt);
			this.password = hash;
		}

		if (_this.isNew) {
			const usernameQuery = usersModel.findOne({username: _this.username});
			const emailQuery = usersModel.findOne({email: _this.email});
			const usernameUser = await usernameQuery;
			const emailUser = await emailQuery;

			if (usernameUser) {
				throw new Error(ErrorCode.USERNAME_ALREADY_EXISTS);
			}

			if (emailUser) {
				throw new Error(ErrorCode.EMAIL_ALREADY_EXISTS);
			}
		}		

		next();
	} catch(error) {
		throw new Error(error.message);
	}
});

const usersModel = connections.model('Users', usersSchema);

module.exports = usersModel;
