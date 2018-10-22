const { STATUS } = require('../../config/const').USER;

const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

module.exports = {
    users: {
        username: { type: String , unique: true, required: true },
        password: { type: String , required: true},
        status: { type: String , required: true, default: STATUS.APPROVED },
        role: { type: String , required: true },
        firstName: { type: String  },
        lastName: { type: String  },
        birthDay: { type: Date },
        email: { type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true
            // required: 'Email address is required',
            // validate: [validateEmail, 'Please fill a valid email address'],
            // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] 
        },
        phoneNumber: { type: String },
        gender: { type: String , required: true },
        position: { type: String }
    }
};
